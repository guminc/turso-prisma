-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "avatar_uri" TEXT,
    "banner_uri" TEXT,
    "username" TEXT,
    "description" TEXT,
    "ens" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "email" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_User" ("address", "avatar_uri", "banner_uri", "created_at", "description", "email", "ens", "id", "status", "updated_at", "username") SELECT "address", "avatar_uri", "banner_uri", "created_at", "description", "email", "ens", "id", "status", "updated_at", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
