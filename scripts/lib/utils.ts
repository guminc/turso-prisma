import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import readline from "readline";

import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "";
const DATABASE_NAME = "Scatter";
let mongoClient = new MongoClient(MONGO_URI);

function convertMongoTypes(obj: any): any {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (typeof value === "object" && value !== null) {
        // Check for MongoDB specific types and convert
        if ("$numberInt" in value) {
          obj[key] = parseInt(value["$numberInt"], 10);
        } else if ("$numberLong" in value) {
          obj[key] = parseInt(value["$numberLong"], 10);
        } else if ("$numberDouble" in value) {
          obj[key] = parseFloat(value["$numberDouble"]);
        } else if ("$date" in value) {
          if (
            typeof value["$date"] === "object" &&
            "$numberLong" in value["$date"]
          ) {
            obj[key] = new Date(parseInt(value["$date"]["$numberLong"], 10));
          } else {
            obj[key] = new Date(value["$date"]);
          }
        } else {
          // Recurse into object
          convertMongoTypes(value);
        }
      }
    }
  }
  return obj;
}

function readAndParseJsonFile(filePath: string): Promise<Document[]> {
  return new Promise((resolve, reject) => {
    const jsonArray: Document[] = [];
    const fileStream = fs.createReadStream(filePath, { encoding: "utf8" });
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      if (line.trim() === "") return; // Skip empty lines
      try {
        const jsonObj = JSON.parse(line);
        jsonArray.push(convertMongoTypes(jsonObj));
      } catch (error) {
        reject(error);
      }
    });

    rl.on("close", () => {
      resolve(jsonArray);
    });

    rl.on("error", (error) => {
      reject(error);
    });
  });
}

export function parseArgs() {
  const args = process.argv.slice(2); // Remove the first two default arguments
  const parsedArgs: Record<string, string | boolean> = {};

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");
      parsedArgs[key] = value || true;
    }
  });

  return parsedArgs;
}

export async function getMongoTableFromFileByName(table: string) {
  const pathToJson = path.join(__dirname, `../../dump/Scatter/${table}.json`);

  if (!fs.existsSync(pathToJson)) {
    throw new Error(`${table}.json file not found at path: ` + pathToJson);
  }

  return readAndParseJsonFile(pathToJson);
}

// Reminder to update make to turn to json
export async function getMongoTablesFromFile() {
  const pathToUsersJson = path.join(__dirname, "../../dump/Scatter/Users.json");
  const pathToCollectionsJson = path.join(
    __dirname,
    "../../dump/Scatter/Collections.json"
  );
  const pathToNftsJson = path.join(__dirname, "../../dump/Scatter/NFTs.json");

  if (!fs.existsSync(pathToUsersJson)) {
    throw new Error("Users.json file not found at path: " + pathToUsersJson);
  }

  if (!fs.existsSync(pathToCollectionsJson)) {
    throw new Error(
      "Collections.json file not found at path: " + pathToCollectionsJson
    );
  }

  if (!fs.existsSync(pathToNftsJson)) {
    throw new Error("NFTs.json file not found at path: " + pathToNftsJson);
  }

  const usersMongo = await readAndParseJsonFile(pathToUsersJson);
  const collectionsMongo = await readAndParseJsonFile(pathToCollectionsJson);
  const nftsMongo = await readAndParseJsonFile(pathToNftsJson);

  return { usersMongo, collectionsMongo, nftsMongo };
}

export async function getMongoTableFromNetworkByName(table: string) {
  return mongoClient.db(DATABASE_NAME).collection(table).find().toArray();
}

export async function getMongoTablesFromNetwork() {
  const MONGO_URI = process.env.MONGO_URI || "";

  const DATABASE_NAME = "Scatter";

  let mongoClient = new MongoClient(MONGO_URI);

  await mongoClient.connect();
  const mongoDb = mongoClient.db(DATABASE_NAME);

  const usersMongo = await mongoDb.collection("Users").find().toArray();
  const collectionsMongo = await mongoDb
    .collection("Collections")
    .find()
    .toArray();
  const nftsMongo = await mongoDb.collection("NFTs").find().toArray();

  await mongoClient.close();

  return { usersMongo, collectionsMongo, nftsMongo };
}

export function saveBatchSqlStatements(
  objects: Object[],
  tableName: string
): string {
  let batchCount = 0;
  let batchSql = "";
  let batchSize = 10000;
  const outputPath = path.join("./dump/", `${tableName}.sql`);

  fs.writeFileSync(outputPath, "", "utf8");
  objects.forEach((cleanedObj, index) => {
    const keys = Object.keys(cleanedObj);
    const columns = keys.join(", ");
    const values = Object.values(cleanedObj).map((value) => {
      if (value instanceof Date) {
        return `'${value.toISOString()}'`;
      }
      if (value === null || value === undefined) {
        return "NULL";
      }
      return typeof value === "string"
        ? `'${value.replace(/'/g, "''")}'`
        : value;
    });
    const insertStatement = `INSERT INTO ${tableName} (${columns}) VALUES (${values});\n`;

    batchSql += insertStatement;

    if ((index + 1) % batchSize === 0 || index === objects.length - 1) {
      // Write the batch to a file
      fs.appendFileSync(outputPath, batchSql);
      batchCount++;
      batchSql = "";
    }
  });
  return outputPath;
}

export async function writeWithRustClient(
  batchStatementPaths: string[],
  db: string
) {
  let arg = db == "local" ? "--local-db" : "";
  for (let i = 0; i < batchStatementPaths.length; i++) {
    const tempFilePath = batchStatementPaths[i];
    await new Promise((resolve, reject) => {
      const rustProcess = spawn("./scripts/rust/target/release/upload", [
        tempFilePath,
        arg,
      ]);

      rustProcess.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
      });

      rustProcess.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
        reject(new Error(`Rust process error: ${data}`));
      });

      rustProcess.on("close", (code) => {
        console.log(`Rust process exited with code ${code}`);
        // fs.unlinkSync(tempFilePath);
        resolve(code);
      });
    });
  }
}
