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
  MaxItem1155,
  MaxItem1155Schema,
  MintData,
  MintDataSchema,
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

function cleanCollectionForSqlite(
  collectionMongo: any
): [Collection, MintData, MaxItem1155[]] {
  // revist stringify fields
  const collection = {
    ...collectionMongo,
    id: cuid(),
    max_items: null,
    is_hidden: collectionMongo.isHidden,
    owner_alt_payout: collectionMongo.ownerAltPayout,
    super_affiliate_payout: collectionMongo.superAffiliatePayout,
    creator_address: ethers.isAddress(collectionMongo.creator)
      ? ethers.getAddress(collectionMongo.creator)
      : null,
    token_address: ethers.isAddress(collectionMongo.token_address)
      ? ethers.getAddress(collectionMongo.token_address)
      : null,
    royalty_address: ethers.isAddress(collectionMongo.royalty_address)
      ? ethers.getAddress(collectionMongo.royalty_address)
      : null,
    discounts: JSON.stringify(collectionMongo.discounts), // JSON serialized as a string
    mint_info: JSON.stringify(collectionMongo.mint_info), // JSON serialized as a string
    socials: JSON.stringify(collectionMongo.socials), // JSON serialized as a string
    trait_counts: JSON.stringify(collectionMongo.trait_counts), // JSON serialized as a string
    last_refreshed: collectionMongo.last_refreshed
      ? new Date(collectionMongo.last_refreshed)
      : null,
    created_at: collectionMongo.created_at
      ? new Date(collectionMongo.created_at)
      : new Date(),
    updated_at: new Date(),
  };

  let maxItems1155: MaxItem1155[] = [];
  if (Array.isArray(collectionMongo.max_items)) {
    maxItems1155 = collectionMongo.max_items.map(
      (max_supply: number, index: number) => {
        const maxItem1155Data = {
          id: cuid(),
          token_id: index + 1,
          max_supply: max_supply,
          collection_id: collection.id,
        };

        const parsedMaxItem1155 = MaxItem1155Schema.safeParse(maxItem1155Data);
        if (!parsedMaxItem1155.success) {
          console.error({ error: parsedMaxItem1155.error });
          throw new Error(`Invalid MaxItem1155: ${parsedMaxItem1155.error}`);
        }

        return parsedMaxItem1155.data;
      }
    );
  } else {
    collection.max_items = collectionMongo.max_items || null;
  }

  const mintData = {
    ...collectionMongo.mint_data,
    ...collectionMongo.mint_sales,
    id: cuid(),
    collection_id: collection.id,
    floor_price_raw: collectionMongo.floor?.floorPriceRaw,
    floor_price_decimal: collectionMongo.floor?.floorPriceDecimal,
    created_at: new Date(),
    updated_at: new Date(),
  };

  const parsedMintData = MintDataSchema.safeParse(mintData);
  if (!parsedMintData.success) {
    console.error({ error: parsedMintData.error });
    throw new Error(`Invalid collection: ${parsedMintData.error}`);
  }

  const parsedCollection = CollectionSchema.safeParse(collection);
  if (!parsedCollection.success) {
    console.error({ error: parsedCollection.error });
    throw new Error(`Invalid collection: ${parsedCollection.error}`);
  }

  return [parsedCollection.data, parsedMintData.data, maxItems1155];
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
    const cleanedMaxItem1155s: MaxItem1155[] = [];
    const cleanedMintDatas: MintData[] = [];

    for (const collection of collectionsMongo) {
      const [cleanedCollection, cleanedMintData, cleanedMaxItem1155] =
        cleanCollectionForSqlite(collection);
      if (cleanedCollection != null && cleanedCollection.creator_address) {
        const user = await prisma.user.findFirst({
          where: { address: cleanedCollection.creator_address },
        });
        if (!user) {
          console.log(
            "User",
            cleanedCollection.creator_address,
            "does not exist, creating User ..."
          );
          await prisma.user.create({
            data: cleanUserForSqlite({
              address: cleanedCollection.creator_address,
            }),
          });
        }
      }
      cleanedCollections.push(cleanedCollection);
      cleanedMintDatas.push(cleanedMintData);
      cleanedMaxItem1155s.push(...cleanedMaxItem1155);
    }
    batchStatements.push(
      getBatchSqlStatements(cleanedCollections, "Collection")
    );
    batchStatements.push(getBatchSqlStatements(cleanedMintDatas, "MintData"));
    batchStatements.push(
      getBatchSqlStatements(cleanedMaxItem1155s, "MaxItem1155")
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
