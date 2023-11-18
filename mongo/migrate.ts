import { MongoClient } from "mongodb";

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

require("dotenv-safe").config();

const localClient = createClient({
    url: "file:prisma/dev.db",
    // syncUrl: process.env.TURSO_DATABASE_URL,
    // authToken: process.env.TURSO_AUTH_TOKEN
});

const adapter = new PrismaLibSQL(localClient);
const prisma = new PrismaClient({ adapter });

const MONGO_URI = process.env.MONGO_URI || "";
const DATABASE_NAME = "Scatter";

let mongoClient = new MongoClient(MONGO_URI);

function cleanUserForSqlite(userMongo: any) {
    return {
        address: userMongo.address || "",
        token: userMongo.token || "",
        avatar_uri: userMongo.avatar_uri || "",
        banner_uri: userMongo.banner_uri || "",
        description: userMongo.description || "",
        username: userMongo.username || "",
        ens: userMongo.ens || "",
        created_at: userMongo.joined_time
            ? new Date(userMongo.joined_time)
            : new Date(),
    };
}

async function main() {
    // await localClient.sync()

    await mongoClient.connect();
    const mongoDb = mongoClient.db(DATABASE_NAME);
    const usersMongo = await mongoDb.collection("Users").find().toArray();
    // const collectionsMongo = await mongoDb.collection("Collections").find().toArray();
    // const nftsMongo = await mongoDb.collection("NFTs").find().toArray();;
    // const mintSaleTransactionsMongo = await mongoDb.collection("MintSaleTransactions").find().toArray();

    const batchSize = 1000;
    for (let i = 0; i < usersMongo.length; i += batchSize) {
        const usersBatch = usersMongo.slice(i, i + batchSize);

        const userInserts = usersBatch.map((user) => {
            const cleanedUser = cleanUserForSqlite(user);
            return prisma.user.create({ data: cleanedUser });
        });

        prisma.$transaction(userInserts);
    }
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
