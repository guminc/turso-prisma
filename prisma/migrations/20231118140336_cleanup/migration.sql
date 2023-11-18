/*
  Warnings:

  - You are about to drop the `InstarevealCollections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MintSaleTransactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Referrals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `collectionId` on the `MintData` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `OpenRarity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection_id` to the `MintData` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_address_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "InstarevealCollections";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MintSaleTransactions";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Referrals";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "avatar_uri" TEXT NOT NULL,
    "banner_uri" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "ens" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MintSaleTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transaction_hash" TEXT NOT NULL,
    "block_number" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "token_address" TEXT NOT NULL,
    "value_decimal" REAL NOT NULL,
    "value_raw" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "InstarevealCollection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "paths" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collection_address" TEXT NOT NULL,
    "referral_amount_eth" TEXT NOT NULL,
    "referral_amount_wei" TEXT NOT NULL,
    "affiliate" TEXT NOT NULL,
    "transaction_hash" TEXT NOT NULL,
    "minter_ens" TEXT NOT NULL,
    "txn_value" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "block_number" INTEGER NOT NULL,
    "affiliate_ens" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token_address" TEXT NOT NULL,
    "token_address_lowercase" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "attributes" TEXT NOT NULL,
    "block_minted" INTEGER NOT NULL,
    "contract_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dna" TEXT NOT NULL,
    "edition" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "old_image_url" TEXT NOT NULL,
    "old_token_uri" TEXT NOT NULL,
    "owner_of" TEXT NOT NULL,
    "token_id_int" INTEGER NOT NULL,
    "token_uri" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Nft_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Nft" ("attributes", "block_minted", "collectionId", "contract_type", "created_at", "description", "dna", "edition", "id", "image", "image_url", "metadata", "name", "network", "old_image_url", "old_token_uri", "owner_of", "token_address", "token_address_lowercase", "token_id", "token_id_int", "token_uri", "updated_at") SELECT "attributes", "block_minted", "collectionId", "contract_type", "created_at", "description", "dna", "edition", "id", "image", "image_url", "metadata", "name", "network", "old_image_url", "old_token_uri", "owner_of", "token_address", "token_address_lowercase", "token_id", "token_id_int", "token_uri", "updated_at" FROM "Nft";
DROP TABLE "Nft";
ALTER TABLE "new_Nft" RENAME TO "Nft";
CREATE TABLE "new_Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "max_items" INTEGER NOT NULL,
    "max_batch_size" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "creator_address" TEXT NOT NULL,
    "is_hidden" BOOLEAN NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "is_mint_active" BOOLEAN NOT NULL,
    "is_archetype" BOOLEAN NOT NULL,
    "is_pending" BOOLEAN NOT NULL,
    "discounts" TEXT NOT NULL,
    "owner_alt_payout" TEXT NOT NULL,
    "super_affiliate_payout" TEXT NOT NULL,
    "contract_version" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "mint_info" TEXT NOT NULL,
    "socials" TEXT NOT NULL,
    "token_address" TEXT NOT NULL,
    "token_address_lowercase" TEXT NOT NULL,
    "trait_counts" TEXT NOT NULL,
    "avatar_uri" TEXT NOT NULL,
    "banner_uri" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hero_uri" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "num_items" INTEGER NOT NULL,
    "num_owners" INTEGER NOT NULL,
    "last_refreshed" DATETIME NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Collection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Collection" ("avatar_uri", "banner_uri", "contract_version", "created_at", "creator_address", "description", "discord", "discounts", "hero_uri", "id", "is_archetype", "is_hidden", "is_mint_active", "is_pending", "last_refreshed", "max_batch_size", "max_items", "mint_info", "name", "num_items", "num_owners", "owner_alt_payout", "slug", "socials", "sort_order", "super_affiliate_payout", "symbol", "token_address", "token_address_lowercase", "trait_counts", "twitter", "updated_at", "website") SELECT "avatar_uri", "banner_uri", "contract_version", "created_at", "creator_address", "description", "discord", "discounts", "hero_uri", "id", "is_archetype", "is_hidden", "is_mint_active", "is_pending", "last_refreshed", "max_batch_size", "max_items", "mint_info", "name", "num_items", "num_owners", "owner_alt_payout", "slug", "socials", "sort_order", "super_affiliate_payout", "symbol", "token_address", "token_address_lowercase", "trait_counts", "twitter", "updated_at", "website" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
CREATE UNIQUE INDEX "Collection_user_id_key" ON "Collection"("user_id");
CREATE TABLE "new_OpenRarity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rank" INTEGER NOT NULL,
    "score" REAL NOT NULL,
    "unique_attributes" INTEGER NOT NULL,
    "nftId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "OpenRarity_nftId_fkey" FOREIGN KEY ("nftId") REFERENCES "Nft" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OpenRarity" ("id", "nftId", "rank", "score", "unique_attributes") SELECT "id", "nftId", "rank", "score", "unique_attributes" FROM "OpenRarity";
DROP TABLE "OpenRarity";
ALTER TABLE "new_OpenRarity" RENAME TO "OpenRarity";
CREATE UNIQUE INDEX "OpenRarity_nftId_key" ON "OpenRarity"("nftId");
CREATE TABLE "new_MintData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "block_last_mint" INTEGER NOT NULL,
    "date_last_mint" DATETIME NOT NULL,
    "mints_last_1h" INTEGER NOT NULL,
    "mints_last_12h" INTEGER NOT NULL,
    "mints_last_24h" INTEGER NOT NULL,
    "mints_last_7d" INTEGER NOT NULL,
    "mints_last_1m" INTEGER NOT NULL,
    "mints_last_6m" INTEGER NOT NULL,
    "floor_price_raw" TEXT NOT NULL,
    "floor_price_decimal" REAL NOT NULL,
    "all_time_raw" TEXT NOT NULL,
    "all_time_decimal" REAL NOT NULL,
    "last_12h_decimal" REAL NOT NULL,
    "last_1h_decimal" REAL NOT NULL,
    "last_24h_decimal" REAL NOT NULL,
    "last_7d_decimal" REAL NOT NULL,
    "last_1m_decimal" REAL NOT NULL,
    "last_6m_decimal" REAL NOT NULL,
    "date_last_sale" DATETIME NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "MintData_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MintData" ("all_time_decimal", "all_time_raw", "block_last_mint", "date_last_mint", "date_last_sale", "floor_price_decimal", "floor_price_raw", "id", "last_12h_decimal", "last_1h_decimal", "last_1m_decimal", "last_24h_decimal", "last_6m_decimal", "last_7d_decimal", "mints_last_12h", "mints_last_1h", "mints_last_1m", "mints_last_24h", "mints_last_6m", "mints_last_7d", "updated_at") SELECT "all_time_decimal", "all_time_raw", "block_last_mint", "date_last_mint", "date_last_sale", "floor_price_decimal", "floor_price_raw", "id", "last_12h_decimal", "last_1h_decimal", "last_1m_decimal", "last_24h_decimal", "last_6m_decimal", "last_7d_decimal", "mints_last_12h", "mints_last_1h", "mints_last_1m", "mints_last_24h", "mints_last_6m", "mints_last_7d", "updated_at" FROM "MintData";
DROP TABLE "MintData";
ALTER TABLE "new_MintData" RENAME TO "MintData";
CREATE UNIQUE INDEX "MintData_collection_id_key" ON "MintData"("collection_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
