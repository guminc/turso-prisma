-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Collection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nft" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "collection_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Nft_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MintData" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "collection_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "MintData_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OpenRarity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rank" INTEGER NOT NULL,
    "score" REAL NOT NULL,
    "unique_attributes" INTEGER NOT NULL,
    "nft_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "OpenRarity_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "Nft" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "paths" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL PRIMARY KEY,
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

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_id_key" ON "Collection"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "MintData_collection_id_key" ON "MintData"("collection_id");

-- CreateIndex
CREATE UNIQUE INDEX "OpenRarity_nft_id_key" ON "OpenRarity"("nft_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
