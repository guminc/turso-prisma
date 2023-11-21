import { MongoClient } from "mongodb";

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import path from 'path'
import os from 'os'
import fs from 'fs'
import cuid from "cuid";
import { spawn } from "child_process"

require("dotenv-safe").config();

const localClient = createClient({
    url: "file:prisma/dev.db",
    syncUrl: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
});

const adapter = new PrismaLibSQL(localClient);
const prisma = new PrismaClient({ adapter });//, log: ['query'] });

const MONGO_URI = process.env.MONGO_URI || "";
const DATABASE_NAME = "Scatter";

let mongoClient = new MongoClient(MONGO_URI);

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
        updated_at: new Date().toISOString()
    };
}

async function main() {
    // await localClient.sync()

    await mongoClient.connect();
    const mongoDb = mongoClient.db(DATABASE_NAME);
    const usersMongo = await mongoDb.collection("Users").find().toArray();

    const batchStatements = usersMongo.map((user) => {
        const cleanedUser = cleanUserForSqlite(user);

        // Dynamically generate SQL query
        const keys = Object.keys(cleanedUser);
        const columns = keys.join(", ");
        const placeholders = keys.map(() => '?')
        const values = Object.values(cleanedUser).map(value => {
            return typeof value === 'string' ? `'${value.replace(/'/g, "''")}'` : value;
        })
        return `INSERT INTO User (${columns}) VALUES (${values})`
    }).join(";\n");

    console.time("ExecutionTime");

    const tempFilePath = path.join(os.tmpdir(), 'sql_batch.txt');
    fs.writeFileSync(tempFilePath, batchStatements);

    await new Promise((resolve, reject) => {
        const rustProcess = spawn('./mongo/rust/target/release/upload', [tempFilePath]);

        rustProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        rustProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(new Error(`Rust process error: ${data}`));
        });

        rustProcess.on('close', (code) => {
            console.log(`Rust process exited with code ${code}`);
            fs.unlinkSync(tempFilePath);
            resolve(0);
        });
    });

    console.timeEnd("ExecutionTime");
    // await localClient.executeMultiple(batchStatements);
    // console.timeEnd("ExecutionTime");
}

main()
    .then(async () => {
        await mongoClient.close();
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await mongoClient.close();
        await prisma.$disconnect();
        process.exit(1);
    });
