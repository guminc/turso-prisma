-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "is_testnet" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_Chain" ("created_at", "id", "is_testnet", "name", "slug", "symbol", "updated_at") SELECT "created_at", "id", "is_testnet", "name", "slug", "symbol", "updated_at" FROM "Chain";
DROP TABLE "Chain";
ALTER TABLE "new_Chain" RENAME TO "Chain";
CREATE UNIQUE INDEX "Chain_id_key" ON "Chain"("id");
CREATE UNIQUE INDEX "Chain_slug_key" ON "Chain"("slug");
CREATE UNIQUE INDEX "Chain_name_key" ON "Chain"("name");
CREATE UNIQUE INDEX "Chain_symbol_key" ON "Chain"("symbol");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
