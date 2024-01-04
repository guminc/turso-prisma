/*
  Warnings:

  - You are about to drop the column `owner_id` on the `Wallet` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Wallet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Wallet_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "Chain" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Wallet" ("address", "chain_id", "created_at", "id", "updated_at") SELECT "address", "chain_id", "created_at", "id", "updated_at" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_address_key" ON "Wallet"("address");
CREATE INDEX "Wallet_user_id_idx" ON "Wallet"("user_id");
CREATE UNIQUE INDEX "Wallet_address_chain_id_key" ON "Wallet"("address", "chain_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
