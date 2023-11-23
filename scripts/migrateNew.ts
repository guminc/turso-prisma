import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import {
  getMongoUsersFromNetwork,
  getMongoUsersFromFile,
  parseArgs,
  getBatchSqlStatements,
} from "../lib/utils";
import path from "path";
import os from "os";
import fs from "fs";
import cuid from "cuid";
import { spawn } from "child_process";

require("dotenv-safe").config();

// const localClient = createClient({
//   url: "file:prisma/dev.db",
//   // syncUrl: process.env.TURSO_DATABASE_URL,
//   // authToken: process.env.TURSO_AUTH_TOKEN
// });

// const adapter = new PrismaLibSQL(localClient);
// const prisma = new PrismaClient({ adapter });

function cleanUserForSqlite(userMongo: any) {
  return {
    id: cuid(),
    address: userMongo.address || "",
    token: userMongo.token || "",
    avatar_uri: userMongo.avatar_uri || "",
    banner_uri: userMongo.banner_uri || "",
    description: userMongo.description || "",
    username: userMongo.username || "",
    ens: userMongo.ens || "",
    created_at: userMongo.joined_time
      ? new Date(userMongo.joined_time).toISOString()
      : new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

async function main() {
  console.time("Total Migration Duration");

  const args = parseArgs();
  const source = args.source === "file" ? "file" : "network";
  const write = args.write === "rust" ? "rust" : "prisma";

  console.log("\nInitiating migration from:", source);

  try {
    // console.time(`Fetching users from ${source}`);

    // const usersMongo =
    //   source === "network"
    //     ? await getMongoUsersFromNetwork()
    //     : getMongoUsersFromFile();

    // console.timeEnd(`Fetching users from ${source}`);

    // if (write === "rust") {
    //   console.time("Inserting docs into prod with Rust");

    //   const batchStatements = getBatchSqlStatements(
    //     usersMongo,
    //     "User",
    //     cleanUserForSqlite
    //   );
    //   console.log({ usersLength: usersMongo.length });

    //   const tempFilePath = path.join(__dirname, "../dump/sql_batch.txt");

    //   console.log({ tempFilePath });

    //   fs.writeFileSync(tempFilePath, batchStatements);
    const tempFilePath = path.join(__dirname, "../dump/batch.sql");

    await new Promise((resolve, reject) => {
      const rustProcess = spawn(
        path.join(__dirname, "./rust/target/release/upload"),
        [tempFilePath]
      );

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
        resolve(0);
      });
    });
    console.timeEnd("Inserting docs into prod with Rust");
  } catch (error) {
    console.error(error);
  }

  console.timeEnd("Total Migration Duration");
}

main()
  .then(async () => {})
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
