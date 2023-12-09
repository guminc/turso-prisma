import fs from "fs";
import path from "path";
import readline from "readline";
import os from "os";
import { spawn } from "child_process";

import { MongoClient } from "mongodb";

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

  const usersMongo = await readAndParseJsonFile(pathToUsersJson);
  const collectionsMongo = await readAndParseJsonFile(pathToCollectionsJson);
  const nftsMongo = await readAndParseJsonFile(pathToNftsJson);

  return { usersMongo, collectionsMongo, nftsMongo };
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

export function getBatchSqlStatements(
  objects: Object[],
  tableName: string
): string {
  let statements: string[] = [];
  objects.forEach((cleanedObj) => {
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
    statements.push(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`);
  });
  return statements.join(";\n");
}

export async function writeWithRustClient(
  batchStatements: string[],
  db: string
) {
  let arg = db == "local" ? "--local-db" : "";
  for (let i = 0; i < batchStatements.length; i++) {
    const tempFilePath = path.join(os.tmpdir(), "batch.sql");
    fs.writeFileSync(tempFilePath, batchStatements[i]);
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
        fs.unlinkSync(tempFilePath);
        resolve(code);
      });
    });
  }
}
