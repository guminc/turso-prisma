import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";
import cuid from "cuid";
import { ethers } from "ethers";
import fs from "fs";
import {
  Collection,
  CollectionSchema,
  MaxItem1155,
  MaxItem1155Schema,
  MintData,
  MintDataSchema,
  Nft,
  NftOwner1155,
  NftOwner1155Schema,
  NftSchema,
  OpenRarity,
  OpenRaritySchema,
  User,
  UserSchema,
  Wallet,
  WalletSchema,
} from "../types/generated";
import {
  getMongoTableFromFileByName,
  getMongoTableFromNetworkByName,
  parseArgs,
  saveBatchSqlStatements,
  writeWithRustClient,
} from "./lib/utils";
require("dotenv-safe").config();

const SourceArg = {
  network: "network",
  file: "file",
} as const;
type ISourceArg = keyof typeof SourceArg;

const WriteArg = {
  prod: "prod",
  local: "local",
} as const;
type IWriteArg = keyof typeof WriteArg;

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
    creator_address: collectionMongo.creator
      ? ethers.getAddress(collectionMongo.creator)
      : null,
    address: collectionMongo.token_address ?? null,
    royalties_address: collectionMongo.royalties_address ?? null,
    discounts: JSON.stringify(collectionMongo.discounts), // JSON serialized as a string
    mint_info: JSON.stringify(collectionMongo.mint_info), // JSON serialized as a string
    socials: JSON.stringify(collectionMongo.socials), // JSON serialized as a string
    trait_counts: JSON.stringify(collectionMongo.trait_counts), // JSON serialized as a string
    chain_id: 1,
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
    throw new Error(`Invalid mintData: ${parsedMintData.error}`);
  }

  const parsedCollection = CollectionSchema.safeParse(collection);
  if (!parsedCollection.success) {
    console.error({ error: parsedCollection.error });
    throw new Error(`Invalid collection: ${parsedCollection.error}`);
  }

  return [parsedCollection.data, parsedMintData.data, maxItems1155];
}

function cleanNftForSqlite(
  nftMongo: any,
  collections: Collection[]
): [Nft | null, OpenRarity | null, NftOwner1155[]] {
  let address: string;
  let foundCollection: any;
  let collection_id: string;

  let nftResult: Nft | null = null;
  let openRarityResult: OpenRarity | null = null;
  let nftOwner1155Result: NftOwner1155[] = [];

  try {
    address = nftMongo.token_address;
    foundCollection = collections.find(
      (collection) => collection?.address == address
    );
    collection_id = foundCollection!.id;
  } catch {
    logInvalidNft(
      nftMongo,
      JSON.stringify(
        {
          error: "collection not found",
          token_address: nftMongo.token_address,
          token_address_lowercase: nftMongo.token_address_lowercase,
        },
        null,
        2
      )
    );
    return [null, null, []];
  }

  const nft = {
    ...nftMongo,
    id: cuid(),
    name: nftMongo.name ? String(nftMongo.name) : null,
    collection_id,
    address,
    owner_of: nftMongo.owner_of ?? null,
    token_id: Number(nftMongo.token_id),
    attributes: JSON.stringify(nftMongo.attributes), // JSON serialized as a string
    metadata: JSON.stringify(nftMongo.metadata), // JSON serialized as a string
    created_at: nftMongo.created_at
      ? new Date(nftMongo.created_at)
      : new Date(),
    updated_at: new Date(),
  };

  const parsedNft = NftSchema.safeParse(nft);
  if (!parsedNft.success) {
    console.error({ error: parsedNft.error });
    logInvalidNft(nft, JSON.stringify(parsedNft.error, null, 2));

    return [null, null, []];
  }
  nftResult = parsedNft.data;

  if (nftMongo.open_rarity?.rank) {
    const openRarityRaw = {
      ...nftMongo.open_rarity,
      id: cuid(),
      nft_id: nftResult.id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const parsedOpenRarity = OpenRaritySchema.safeParse(openRarityRaw);
    if (!parsedOpenRarity.success) {
      console.error({ error: parsedOpenRarity.error });
      throw new Error(`Invalid openRarity: ${parsedOpenRarity.error}`);
    }
    openRarityResult = parsedOpenRarity.data;
  }

  if (nftMongo.owners) {
    for (const [key, value] of Object.entries(nftMongo.owners)) {
      const nftOwner1155Raw = {
        id: cuid(),
        nft_id: nftResult.id,
        owner_of: key,
        quantity: value,
      };

      const parsedNftOwner1155 = NftOwner1155Schema.safeParse(nftOwner1155Raw);
      if (!parsedNftOwner1155.success) {
        console.error({ error: parsedNftOwner1155.error });
        throw new Error(`Invalid nft owner 1155: ${parsedNftOwner1155.error}`);
      }
      nftOwner1155Result.push(parsedNftOwner1155.data);
    }
  }

  return [nftResult, openRarityResult, nftOwner1155Result];
}

function cleanUserForSqlite(userMongo: any): {
  cleanedUser: User;
  cleanedWallet: Wallet;
} {
  const userInput = {
    ...userMongo,
    id: cuid(),
    status: "active",
    created_at: userMongo.joined_time
      ? new Date(userMongo.joined_time)
      : new Date(),
    updated_at: new Date(),
  };

  const cleanedUser = UserSchema.safeParse(userInput);

  if (!cleanedUser.success) {
    console.error({ error: cleanedUser.error, userInput });
    throw new Error(`Invalid user: ${cleanedUser.error}`);
  }

  const walletInput = {
    id: cuid(),
    address: userMongo.address,
    owner_id: cleanedUser.data.id,
    chain_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  };

  const cleanedWallet = WalletSchema.safeParse(walletInput);

  if (!cleanedWallet.success) {
    console.error({ error: cleanedWallet.error });
    throw new Error(`Invalid user: ${cleanedWallet.error}`);
  }

  return { cleanedUser: cleanedUser.data, cleanedWallet: cleanedWallet.data };
}

async function writeToDb(batchStatementPaths: string[], write: string) {
  if (write == "prod") {
    console.time("Inserting docs into prod with Rust");
    await writeWithRustClient(batchStatementPaths, "prod");
    console.timeEnd("Inserting docs into prod with Rust");
  } else {
    console.time("Inserting docs into local with Rust");
    await writeWithRustClient(batchStatementPaths, "local");
    console.timeEnd("Inserting docs into local with Rust");
  }
}

async function main() {
  console.time("Total Migration Duration");

  const args = parseArgs();
  // read from mongodump by default
  const source: ISourceArg = args.source === "network" ? "network" : "file";
  const write: IWriteArg = args.write === "prod" ? "prod" : "local";

  console.log("\n🚀 Initiating migration from:", source, "\n");

  try {
    await seedInitialData(write);
    await writeUsersToDb(source, write);
    const cleanedCollections = await writeCollectionsToDb(source, write);
    await writeNftsToDb(source, write, cleanedCollections);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  console.timeEnd("Total Migration Duration");
}

async function getBySource(source: ISourceArg, table: string) {
  return source === "network"
    ? getMongoTableFromNetworkByName(table)
    : getMongoTableFromFileByName(table);
}

async function seedInitialData(write: IWriteArg) {
  console.log("\n🌱 Seeding initial data\n");
  const batchStatementPaths = ["dump/seed.sql"];
  await writeToDb(batchStatementPaths, write);
}

async function writeUsersToDb(source: ISourceArg, write: IWriteArg) {
  console.log("\n🧕 Writing Users to DB\n");
  const usersMongo = await getBySource(source, "Users");

  const userResults = usersMongo.map((user) => cleanUserForSqlite(user));

  const cleanedUsers = userResults.map(({ cleanedUser }) => cleanedUser);
  const cleanedWallets = userResults.map(({ cleanedWallet }) => cleanedWallet);

  console.log({
    // cleanedUsers,
    usersCount: cleanedUsers.length,
    // cleanedWallets,
    walletsCount: cleanedWallets.length,
  });

  const batchStatementPaths = [
    saveBatchSqlStatements(cleanedUsers, "User"),
    saveBatchSqlStatements(cleanedWallets, "Wallet"),
  ];

  await writeToDb(batchStatementPaths, write);
}

async function writeCollectionsToDb(source: ISourceArg, write: IWriteArg) {
  console.log("\n🧳 Writing Collections to DB\n");
  let batchStatementPaths: string[] = [];

  const collectionsMongo = (await getBySource(source, "Collections")) as any;

  const cleanedCollections: Collection[] = [];
  const cleanedMaxItem1155s: MaxItem1155[] = [];
  const cleanedMintDatas: MintData[] = [];

  for (const collection of collectionsMongo) {
    if (!collection.token_address) {
      continue;
    }

    const [cleanedCollection, cleanedMintData, cleanedMaxItem1155] =
      cleanCollectionForSqlite(collection);

    if (cleanedCollection != null && cleanedCollection.creator_address) {
      const wallet = await prisma.wallet.findFirst({
        where: { address: cleanedCollection.creator_address },
      });
      if (!wallet) {
        console.log(
          "Error: Wallet does not exist:",
          cleanedCollection.creator_address
        );
      }
    }

    cleanedCollections.push(cleanedCollection);
    cleanedMintDatas.push(cleanedMintData);
    cleanedMaxItem1155s.push(...cleanedMaxItem1155);
  }
  batchStatementPaths.push(
    saveBatchSqlStatements(cleanedCollections, "Collection")
  );
  batchStatementPaths.push(
    saveBatchSqlStatements(cleanedMintDatas, "MintData")
  );
  batchStatementPaths.push(
    saveBatchSqlStatements(cleanedMaxItem1155s, "MaxItem1155")
  );

  await writeToDb(batchStatementPaths, write);
  return cleanedCollections;
}

function logInvalidNft(nft: any, error: string) {
  const data = JSON.stringify(nft, null, 2);
  fs.appendFileSync("invalidNfts.log", "\n" + data + error + "\n");
}

async function writeNftsToDb(
  source: ISourceArg,
  write: IWriteArg,
  cleanedCollections: Collection[]
) {
  console.log("\n🖼️  Writing NFTs to DB\n");

  let batchStatementPaths: string[] = [];

  const nftsMongo = await getBySource(source, "NFTs");

  const cleanedNfts: Nft[] = [];
  const cleanedOpenRarities: OpenRarity[] = [];
  const cleanedNftOwner1155s: NftOwner1155[] = [];

  while (nftsMongo.length > 0) {
    const nft = nftsMongo.pop(); // Removes element for memory
    const [cleanedNft, cleanedOpenrarity, cleanedNftOwner1155] =
      cleanNftForSqlite(nft, cleanedCollections);

    if (!cleanedNft) {
      continue;
    }

    if (cleanedNft) {
      cleanedNfts.push(cleanedNft);
    }
    if (cleanedOpenrarity) {
      cleanedOpenRarities.push(cleanedOpenrarity);
    }
    if (cleanedNftOwner1155.length) {
      cleanedNftOwner1155s.push(...cleanedNftOwner1155);
    }
  }

  cleanedCollections.length = 0;
  batchStatementPaths.push(saveBatchSqlStatements(cleanedNfts, "Nft"));
  cleanedNfts.length = 0;

  // force garbage collector
  if (typeof global !== "undefined" && typeof global.gc === "function") {
    global.gc();
  }

  await writeToDb(batchStatementPaths, write);
  batchStatementPaths.length = 0;

  batchStatementPaths.push(
    saveBatchSqlStatements(cleanedOpenRarities, "OpenRarity")
  );
  cleanedOpenRarities.length = 0;

  batchStatementPaths.push(
    saveBatchSqlStatements(cleanedNftOwner1155s, "NftOwner1155")
  );
  cleanedNftOwner1155s.length = 0;

  // force garbage collector
  if (typeof global !== "undefined" && typeof global.gc === "function") {
    global.gc();
  }

  await writeToDb(batchStatementPaths, write);
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
