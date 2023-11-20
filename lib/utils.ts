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

export function getMongoUsersFromFile() {
  let usersMongo = [];
  const pathToUsersBson = path.join(__dirname, "../dump/Scatter/Users.bson");
  const buffer = fs.readFileSync(pathToUsersBson);
  let offset = 0;

  let i = 0;

  while (offset < buffer.length) {
    // Read the size of the next document
    const size = buffer.readInt32LE(offset);
    // Extract the document's buffer using subarray
    const documentBuffer = buffer.subarray(offset, offset + size);
    // Deserialize the document
    const document = BSON.deserialize(documentBuffer);

    usersMongo.push(document);

    process.stdout.write(`\rCount: ${++i}`);

    // Move to the next document
    offset += size;
  }

  process.stdout.write("\n");

  return usersMongo;
}

export async function getMongoUsersFromNetwork() {
  const MONGO_URI = process.env.MONGO_URI || "";

  const DATABASE_NAME = "Scatter";

  let mongoClient = new MongoClient(MONGO_URI);

  await mongoClient.connect();
  const mongoDb = mongoClient.db(DATABASE_NAME);

  const usersMongo = await mongoDb.collection("Users").find().toArray();

  await mongoClient.close();

  return usersMongo;
}
