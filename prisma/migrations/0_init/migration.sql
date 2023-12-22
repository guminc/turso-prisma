-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "max_items" INTEGER,
    "symbol" TEXT,
    "creator_address" TEXT,
    "is_hidden" BOOLEAN,
    "sort_order" INTEGER,
    "is_mint_active" BOOLEAN,
    "is_archetype" BOOLEAN,
    "is_pending" BOOLEAN,
    "discounts" TEXT,
    "owner_alt_payout" TEXT,
    "super_affiliate_payout" TEXT,
    "contract_version" INTEGER,
    "contract_type" TEXT,
    "slug" TEXT,
    "mint_info" TEXT,
    "socials" TEXT,
    "token_address" TEXT,
    "trait_counts" TEXT,
    "avatar_uri" TEXT,
    "banner_uri" TEXT,
    "description" TEXT,
    "royalties" INTEGER,
    "royalties_address" TEXT,
    "hero_uri" TEXT,
    "twitter" TEXT,
    "website" TEXT,
    "discord" TEXT,
    "network" TEXT,
    "num_items" INTEGER,
    "num_total_items" INTEGER,
    "num_owners" INTEGER,
    "last_refreshed" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Collection_creator_address_fkey" FOREIGN KEY ("creator_address") REFERENCES "User" ("address") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MaxItem1155" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token_id" INTEGER NOT NULL,
    "max_supply" INTEGER NOT NULL,
    "collection_id" TEXT NOT NULL,
    CONSTRAINT "MaxItem1155_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nft" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token_address" TEXT NOT NULL,
    "token_id" INTEGER NOT NULL,
    "attributes" TEXT,
    "block_minted" INTEGER,
    "contract_type" TEXT,
    "description" TEXT,
    "image" TEXT,
    "image_url" TEXT,
    "metadata" TEXT,
    "name" TEXT,
    "network" TEXT,
    "old_image_url" TEXT,
    "old_token_uri" TEXT,
    "owner_of" TEXT,
    "token_uri" TEXT,
    "log_index" INTEGER,
    "transaction_index" INTEGER,
    "collection_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Nft_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NftOwner1155" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner_of" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "nft_id" TEXT NOT NULL,
    CONSTRAINT "NftOwner1155_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "Nft" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MintData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "block_last_mint" INTEGER,
    "date_last_mint" DATETIME,
    "mints_last_1h" INTEGER,
    "mints_last_12h" INTEGER,
    "mints_last_24h" INTEGER,
    "mints_last_7d" INTEGER,
    "mints_last_1m" INTEGER,
    "mints_last_6m" INTEGER,
    "floor_price_raw" TEXT,
    "floor_price_decimal" REAL,
    "all_time_raw" TEXT,
    "all_time_decimal" REAL,
    "last_12h_decimal" REAL,
    "last_1h_decimal" REAL,
    "last_24h_decimal" REAL,
    "last_7d_decimal" REAL,
    "last_1m_decimal" REAL,
    "last_6m_decimal" REAL,
    "date_last_sale" DATETIME,
    "collection_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "MintData_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OpenRarity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rank" INTEGER,
    "score" REAL,
    "unique_attributes" INTEGER,
    "nft_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "OpenRarity_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "Nft" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "avatar_uri" TEXT,
    "banner_uri" TEXT,
    "username" TEXT,
    "description" TEXT,
    "ens" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "email" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider_name" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Connection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "is_testnet" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Wallet_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Wallet_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "Chain" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expiration_date" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL DEFAULT '',
    "locale" TEXT,
    "ip_address" TEXT,
    "nonce" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
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

-- CreateTable
CREATE TABLE "_PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_token_address_network_key" ON "Collection"("token_address", "network");

-- CreateIndex
CREATE UNIQUE INDEX "MaxItem1155_token_id_collection_id_key" ON "MaxItem1155"("token_id", "collection_id");

-- CreateIndex
CREATE UNIQUE INDEX "NftOwner1155_owner_of_nft_id_key" ON "NftOwner1155"("owner_of", "nft_id");

-- CreateIndex
CREATE UNIQUE INDEX "MintData_collection_id_key" ON "MintData"("collection_id");

-- CreateIndex
CREATE UNIQUE INDEX "OpenRarity_nft_id_key" ON "OpenRarity"("nft_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_provider_id_key" ON "Connection"("provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_provider_name_provider_id_key" ON "Connection"("provider_name", "provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_provider_id_user_id_key" ON "Connection"("provider_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Password_user_id_key" ON "Password"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Chain_id_key" ON "Chain"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chain_slug_key" ON "Chain"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Chain_name_key" ON "Chain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chain_symbol_key" ON "Chain"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_address_key" ON "Wallet"("address");

-- CreateIndex
CREATE INDEX "Wallet_owner_id_idx" ON "Wallet"("owner_id");

-- CreateIndex
CREATE INDEX "Session_user_id_idx" ON "Session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_user_id_user_agent_key" ON "Session"("user_id", "user_agent");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_action_entity_access_key" ON "Permission"("action", "entity", "access");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MintSaleTransaction_transaction_hash_from_key" ON "MintSaleTransaction"("transaction_hash", "from");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

