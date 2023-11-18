import { MongoClient } from "mongodb";

// import { Prisma, PrismaClient } from '@prisma/client'
// import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from "@libsql/client";

import dotenv from "dotenv";
dotenv.config();

const localClient = createClient({
    url: "file:local.db",
    syncUrl: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

// const adapter = new PrismaLibSQL(localClient)
// const prisma = new PrismaClient({ adapter })

const MONGO_URI = process.env.MONGO_URI || "";
const DATABASE_NAME = "Scatter";

let mongoClient = new MongoClient(MONGO_URI);

function cleanUserForSqlite(userMongo: any) {
    return {
        address: userMongo.address || "",
        address_lowercase: userMongo.address_lowercase || "",
        token: userMongo.token || "",
        avatar_uri: userMongo.avatar_uri || "",
        banner_uri: userMongo.banner_uri || "",
        description: userMongo.description || "",
        username: userMongo.username || "",
        ens: userMongo.ens || "",
        joined_time: userMongo.joined_time
            ? new Date(userMongo.joined_time)
            : new Date(),
        nonce: userMongo.nonce || 0,
    };
}

function createInsertStatement(tableName: string, data: any) {
    const keys = Object.keys(data);
    const placeholders = keys.map(() => "?").join(", ");
    const sql = `INSERT INTO ${tableName} (${keys.join(
        ", ",
    )}) VALUES (${placeholders})`;
    const args = keys.map((key) => data[key]);

    return { sql, args };
}

async function main() {
    await localClient.sync()

    await mongoClient.connect();
    const mongoDb = mongoClient.db(DATABASE_NAME);
    const usersMongo = await mongoDb.collection("Users").find().toArray();
    // const collectionsMongo = await mongoDb.collection("Collections").find().toArray();
    // const nftsMongo = await mongoDb.collection("NFTs").find().toArray();;
    // const mintSaleTransactionsMongo = await mongoDb.collection("MintSaleTransactions").find().toArray();

    const statements = usersMongo.map((user) => {
        const cleanedUser = cleanUserForSqlite(user);
        return createInsertStatement("users", cleanedUser);
    });

    try {
        await localClient.batch(statements, "write");
    } catch (error) {
        console.error("Error processing batch:", error);
        // Optionally, rethrow the error if you want to stop the whole process
        // throw error;
    }
}

main()
    .then(async () => {
        await mongoClient.close();
        // await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await mongoClient.close();
        // await prisma.$disconnect()
        process.exit(1);
    });
