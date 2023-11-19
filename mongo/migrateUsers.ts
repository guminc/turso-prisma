import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import fs from "fs";
import path from "path";

import { BSON } from "bson";

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
  console.time("Migration Duration");

  const pathToUsersBson = path.join(__dirname, "../dump/Scatter/Users.bson");
  const buffer = fs.readFileSync(pathToUsersBson);
  let offset = 0;

  let userInserts = [];

  try {
    while (offset < buffer.length) {
      // Read the size of the next document
      const size = buffer.readInt32LE(offset);
      // Extract the document's buffer using subarray
      const documentBuffer = buffer.subarray(offset, offset + size);
      // Deserialize the document
      const document = BSON.deserialize(documentBuffer);

      const cleanedUser = cleanUserForSqlite(document);
      userInserts.push(prisma.user.create({ data: cleanedUser }));

      // Move to the next document
      offset += size;
    }

    // Execute all insert operations in a single transaction
    await prisma.$transaction(userInserts);
  } catch (error) {
    console.error("Error parsing BSON file:", error);
  }

  console.timeEnd("Migration Duration");
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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
