import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import {
  getMongoUsersFromNetwork,
  getMongoUsersFromFile,
  parseArgs,
} from "../lib/utils";

require("dotenv-safe").config();

const localClient = createClient({
  url: "file:prisma/dev.db",
  // syncUrl: process.env.TURSO_DATABASE_URL,
  // authToken: process.env.TURSO_AUTH_TOKEN
});

const adapter = new PrismaLibSQL(localClient);
const prisma = new PrismaClient({ adapter });

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
  console.time("Total Migration Duration");

  const args = parseArgs();
  const source = args.source === "file" ? "file" : "network";

  console.log("\nInitiating migration from:", source);

  try {
    console.time(`Fetching users from ${source}`);

    const usersMongo =
      source === "network"
        ? await getMongoUsersFromNetwork()
        : getMongoUsersFromFile();

    console.timeEnd(`Fetching users from ${source}`);

    console.time("Inserting docs into Prisma");

    const userInserts = usersMongo.map((user) => {
      const cleanedUser = cleanUserForSqlite(user);
      return prisma.user.create({ data: cleanedUser });
    });
    await prisma.$transaction(userInserts);

    console.timeEnd("Inserting docs into Prisma");
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
