import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import {
  getMongoTablesFromNetwork,
  getMongoTablesFromFile,
  parseArgs,
  getBatchSqlStatements,
} from "../lib/utils";
import path from 'path'
import os from 'os'
import fs from 'fs'
import cuid from "cuid";
import { spawn } from "child_process"
import { ethers } from "ethers"

require("dotenv-safe").config();

const localClient = createClient({
  url: "file:prisma/dev.db",
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

const adapter = new PrismaLibSQL(localClient);
const prisma = new PrismaClient({ adapter });

function cleanCollectionForSqlite(collectionMongo: any) {
  if (!collectionMongo.token_address) {
    return null
  }
  return {
    id: cuid(),
    name: collectionMongo.name || '',
    max_items: 0,//collectionMongo.max_items || 0,
    max_batch_size: collectionMongo.max_batch_size || 0,
    symbol: collectionMongo.symbol || '',
    creator_address: ethers.getAddress(collectionMongo.creator) || ethers.ZeroAddress,
    is_hidden: collectionMongo.is_hidden || false,
    sort_order: collectionMongo.sort_order || 0,
    is_mint_active: collectionMongo.is_mint_active || false,
    is_archetype: collectionMongo.is_archetype || false,
    is_pending: collectionMongo.is_pending || false,
    discounts: JSON.stringify(collectionMongo.discounts) || '', // JSON serialized as a string
    owner_alt_payout: collectionMongo.owner_alt_payout || '',
    super_affiliate_payout: collectionMongo.super_affiliate_payout || '',
    contract_version: collectionMongo.contract_version || 0,
    slug: collectionMongo.slug || '',
    mint_info: JSON.stringify(collectionMongo.mint_info) || '', // JSON serialized as a string
    socials: JSON.stringify(collectionMongo.socials) || '', // JSON serialized as a string
    token_address: ethers.getAddress(collectionMongo.token_address) || ethers.ZeroAddress,
    trait_counts: '',//JSON.stringify(collectionMongo.trait_counts) || '', // JSON serialized as a string
    avatar_uri: collectionMongo.avatar_uri || '',
    banner_uri: collectionMongo.banner_uri || '',
    description: '',//collectionMongo.description || '',
    hero_uri: collectionMongo.hero_uri || '',
    twitter: collectionMongo.twitter || '',
    website: collectionMongo.website || '',
    discord: collectionMongo.discord || '',
    num_items: collectionMongo.num_items || 0,
    num_owners: collectionMongo.num_owners || 0,
    last_refreshed: collectionMongo.last_refreshed
      ? new Date(collectionMongo.last_refreshed).toISOString()
      : new Date().toISOString(),
    created_at: collectionMongo.created_at
      ? new Date(collectionMongo.created_at).toISOString()
      : new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function cleanUserForSqlite(userMongo: any) {
  return {
    id: cuid(),
    address: ethers.getAddress(userMongo.address) || "",
    token: userMongo.token || "",
    avatar_uri: userMongo.avatar_uri || "",
    banner_uri: userMongo.banner_uri || "",
    description: userMongo.description || "",
    username: userMongo.username || "",
    ens: userMongo.ens || "",
    created_at: userMongo.joined_time
      ? new Date(userMongo.joined_time).toISOString()
      : new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

async function main() {
  console.time("Total Migration Duration");

  const args = parseArgs();
  const source = args.source === "file" ? "file" : "network";
  const write = args.write === "rust" ? "rust" : "prisma";

  console.log("\nInitiating migration from:", source);

  try {
    console.time(`Fetching users from ${source}`);

    const { usersMongo, collectionsMongo } =
      source === "network"
        ? await getMongoTablesFromNetwork()
        : getMongoTablesFromFile();

    console.timeEnd(`Fetching users from ${source}`);

    if (write == 'rust') {
      console.time("Inserting docs into prod with Rust");

      const batchStatements = []
      batchStatements.push(getBatchSqlStatements(usersMongo, 'User', cleanUserForSqlite))
      batchStatements.push(getBatchSqlStatements(collectionsMongo, 'Collection', cleanCollectionForSqlite))

      for (let i = 0; i < batchStatements.length; i++) {
        const tempFilePath = path.join(os.tmpdir(), 'batch.sql');
        fs.writeFileSync(tempFilePath, batchStatements[i]);
        await new Promise((resolve, reject) => {
          const rustProcess = spawn('./scripts/rust/target/release/upload', [tempFilePath]);

          rustProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
          });

          rustProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(new Error(`Rust process error: ${data}`));
          });

          rustProcess.on('close', (code) => {
            console.log(`Rust process exited with code ${code}`);
            // fs.unlinkSync(tempFilePath);
            resolve(0);
          });
        });
        console.timeEnd("Inserting docs into prod with Rust");

      }
    } else {
      console.time("Inserting docs into Prisma");
      const userInserts = usersMongo.map((user) => {
        const cleanedUser = cleanUserForSqlite(user);
        return prisma.user.create({ data: cleanedUser });
      });
      await prisma.$transaction(userInserts);
      let collectionInserts: any[] = []
      collectionsMongo.map((collection) => {
        const cleanedCollection = cleanCollectionForSqlite(collection);
        if (cleanedCollection != null) {
          collectionInserts.push(prisma.collection.create({ data: cleanedCollection }));
        }
      });
      await prisma.$transaction(collectionInserts);
      console.timeEnd("Inserting docs into Prisma");
    }
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
