import { createClient } from "@libsql/client";
import { ethers } from "ethers";
import cuid from "cuid";
import {
  getBatchSqlStatements,
  getMongoTablesFromFile,
  getMongoTablesFromNetwork,
  parseArgs,
  writeWithRustClient,
} from "./lib/utils";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";
import {
  Collection,
  CollectionSchema,
  User,
  UserSchema,
} from "../types/generated";
require("dotenv-safe").config();

const localClient = createClient({
  url: "file:prisma/dev.db",
  // syncUrl: process.env.TURSO_DATABASE_URL,
  // authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(localClient);
const prisma = new PrismaClient({ adapter });

function cleanCollectionForSqlite(collectionMongo: any): Collection {
  // revist forced empty and stringify fields
  const input = {
    ...collectionMongo,
    id: cuid(),
    max_items: 0, //collectionMongo.max_items || 0,
    creator_address: ethers.isAddress(collectionMongo.creator)
      ? ethers.getAddress(collectionMongo.creator)
      : null,
    discounts: JSON.stringify(collectionMongo.discounts) || "", // JSON serialized as a string
    mint_info: JSON.stringify(collectionMongo.mint_info) || "", // JSON serialized as a string
    socials: JSON.stringify(collectionMongo.socials) || "", // JSON serialized as a string
    token_address: ethers.isAddress(collectionMongo.token_address)
      ? ethers.getAddress(collectionMongo.token_address)
      : null,
    trait_counts: "", //JSON.stringify(collectionMongo.trait_counts) || '', // JSON serialized as a string
    description: "",
    last_refreshed: collectionMongo.last_refreshed
      ? new Date(collectionMongo.last_refreshed)
      : null,
    created_at: collectionMongo.created_at
      ? new Date(collectionMongo.created_at)
      : new Date(),
    updated_at: new Date(),
  };

  const result = CollectionSchema.safeParse(input);

  if (!result.success) {
    console.error({ error: result.error });
    throw new Error(`Invalid collection: ${result.error}`);
  }

  return result.data;
}

function cleanUserForSqlite(userMongo: any): User {
  const input = {
    ...userMongo,
    id: cuid(),
    status: "active",
    created_at: userMongo.joined_time
      ? new Date(userMongo.joined_time)
      : new Date(),
    updated_at: new Date(),
  };

  const result = UserSchema.safeParse(input);

  if (!result.success) {
    console.error({ error: result.error });
    throw new Error(`Invalid user: ${result.error}`);
  }

  return result.data;
}

async function writeToDb(batchStatements: string[], write: string) {
  if (write == "prod") {
    console.time("Inserting docs into prod with Rust");
    await writeWithRustClient(batchStatements, "prod");
    console.timeEnd("Inserting docs into prod with Rust");
  } else {
    console.time("Inserting docs into local with Rust");
    await writeWithRustClient(batchStatements, "local");
    console.timeEnd("Inserting docs into local with Rust");
  }
}

async function main() {
  console.time("Total Migration Duration");

  const args = parseArgs();
  const source = args.source === "file" ? "file" : "network";
  const write = args.write === "prod" ? "prod" : "local";

  console.log("\nInitiating migration from:", source);

  try {
    console.time(`Fetching tables from ${source}`);

    const { usersMongo, collectionsMongo } =
      source === "network"
        ? await getMongoTablesFromNetwork()
        : getMongoTablesFromFile();

    console.timeEnd(`Fetching tables from ${source}`);

    const batchStatements: string[] = [];
    const cleanedUsers = usersMongo.map((user) => cleanUserForSqlite(user));
    batchStatements.push(getBatchSqlStatements(cleanedUsers, "User"));

    await writeToDb(batchStatements, write);
    batchStatements.length = 0;

    const cleanedCollections: Collection[] = [];
    for (const collection of collectionsMongo) {
      const cleaned = cleanCollectionForSqlite(collection);
      if (cleaned != null && cleaned.creator_address) {
        const user = await prisma.user.findFirst({
          where: { address: cleaned.creator_address },
        });
        if (!user) {
          console.log(
            "User",
            cleaned.creator_address,
            "does not exist, creating User ..."
          );
          await prisma.user.create({
            data: cleanUserForSqlite({
              address: cleaned.creator_address,
            }),
          });
        }
      }
      cleanedCollections.push(cleaned);
    }
    batchStatements.push(
      getBatchSqlStatements(cleanedCollections, "Collection")
    );

    await writeToDb(batchStatements, write);
  } catch (error) {
    console.error(error);
  }
  console.timeEnd("Total Migration Duration");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
