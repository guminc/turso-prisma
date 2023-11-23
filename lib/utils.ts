import fs from "fs";
import path from "path";

import { BSON } from "bson";
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

export function getMongoTablesFromFile() {
  let usersMongo = [];
  let collectionsMongo = [];

  const pathToUsersBson = path.join(__dirname, "../dump/Scatter/Users.bson");
  const pathToCollectionsBson = path.join(__dirname, "../dump/Scatter/Collections.bson");
  const userbuffer = fs.readFileSync(pathToUsersBson);
  const collectionBuffer = fs.readFileSync(pathToCollectionsBson);

  let offset = 0;
  let i = 0;

  while (offset < userbuffer.length) {
    // Read the size of the next document
    const size = userbuffer.readInt32LE(offset);
    // Extract the document's buffer using subarray
    const documentBuffer = userbuffer.subarray(offset, offset + size);
    // Deserialize the document
    const document = BSON.deserialize(documentBuffer);

    usersMongo.push(document);

    process.stdout.write(`\rCount: ${++i}`);

    // Move to the next document
    offset += size;
  }

  offset = 0;
  i = 0;

  while (offset < collectionBuffer.length) {
    // Read the size of the next document
    const size = collectionBuffer.readInt32LE(offset);
    // Extract the document's buffer using subarray
    const documentBuffer = collectionBuffer.subarray(offset, offset + size);
    // Deserialize the document
    const document = BSON.deserialize(documentBuffer);

    collectionsMongo.push(document);

    process.stdout.write(`\rCount: ${++i}`);

    // Move to the next document
    offset += size;
  }

  process.stdout.write("\n");

  return { usersMongo, collectionsMongo };
}

export async function getMongoTablesFromNetwork() {
  const MONGO_URI = process.env.MONGO_URI || "";

  const DATABASE_NAME = "Scatter";

  let mongoClient = new MongoClient(MONGO_URI);

  await mongoClient.connect();
  const mongoDb = mongoClient.db(DATABASE_NAME);

  const usersMongo = await mongoDb.collection("Users").find().toArray();
  const collectionsMongo = await mongoDb.collection("Collections").find().toArray();

  await mongoClient.close();

  return { usersMongo, collectionsMongo };
}

export function getBatchSqlStatements(objects: Object[], tableName: string, cleanObject: Function): string {
  let statements: string[] = []
  objects.map((obj) => {
    const cleanedObj = cleanObject(obj);
    if (cleanedObj != null) {
      const keys = Object.keys(cleanedObj);
      const columns = keys.join(", ");
      const values = Object.values(cleanedObj).map(value => {
        return typeof value === 'string' ? `'${value.replace(/'/g, "''")}'` : value;
      })
      statements.push(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`)
    }
  })
  return statements.join(";\n");
}
