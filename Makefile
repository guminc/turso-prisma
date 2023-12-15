# Makefile

# Include the .env file
-include .env
export

# Default target
all: main

create-migration:
	npx prisma migrate dev
	npx prettier --write ./types/generated/index.ts

dump-mongo-everything:
	mongodump --forceTableScan --uri $$MONGO_URI

# eg: make dump-mongo-collection collection=Users
dump-mongo-collection:
	mongodump --collection=$(collection) --forceTableScan --uri $$MONGO_URI

# eg: make convert-single-bson-to-json collection=Users
convert-single-bson-to-json:
	bsondump --outFile ./dump/Scatter/$(collection).json ./dump/Scatter/$(collection).bson

convert-bson-to-json:
	for file in ./dump/Scatter/*.bson; do \
		bsondump --outFile "$${file%.bson}.json" "$$file"; \
	done

migrate-remote:
	for file in ./prisma/migrations/*/*.sql; do \
		turso db shell --location iad $$REMOTE_DB_NAME < $$file; \
	done

# running this twice as a hack to get around foreign keys constraints
wipe-remote:
	node ./scripts/dropAllTables.js
	node ./scripts/dropAllTables.js

wipe-local:
	rm -rf ./prisma/dev.db
	sqlite3 ./prisma/dev.db ".quit"

seed-remote:
	turso db shell --location iad $$REMOTE_DB_NAME < ./dump.sql

create-remote:
	turso db create $$REMOTE_DB_NAME --from-file ./prisma/dev.db

destroy-remote:
	yes | turso db destroy $$REMOTE_DB_NAME

seed-remote-rust:
	./scripts/rust/target/release/upload ./dump/User.sql
	./scripts/rust/target/release/upload ./dump/Collection.sql
	./scripts/rust/target/release/upload ./dump/MintData.sql
	./scripts/rust/target/release/upload ./dump/MaxItem1155.sql
	./scripts/rust/target/release/upload ./dump/Nft.sql
	./scripts/rust/target/release/upload ./dump/OpenRarity.sql
	./scripts/rust/target/release/upload ./dump/NftOwner1155.sql

reset-local:
	$(MAKE) wipe-local
	$(MAKE) create-migration

seed-local-tables:
	node --max_old_space_size=8024 --expose-gc --require ts-node/register ./scripts/migrate.ts --source=$(source) --write=local

build-rust-binary:
	cargo build --release --manifest-path ./scripts/rust/Cargo.toml

dump-local:
	sqlite3 ./prisma/dev.db '.output ./dump.sql' '.dump'

baseline:
	mkdir -p prisma/migrations/0_init
	npx prisma migrate diff \
		--from-empty \
		--to-schema-datamodel prisma/schema.prisma \
		--script > prisma/migrations/0_init/migration.sql

main:
	./scripts/echo.sh

# use source=network to fetch data in-memory
# use source=file to dump data to disk
	@if [ "$(source)" = "file" ]; then \
		$(MAKE) dump-mongo-everything; \
		$(MAKE) convert-bson-to-json; \
	fi

	$(MAKE) reset-local
	$(MAKE) build-rust-binary
	$(MAKE) seed-local-tables

# use write=rust to delete and import each table individually using `turso db shell`
# use write=prod to drop the whole table and recreate it based on the local prisma db
	@if [ "$(write)" = "rust" ]; then \
		$(MAKE) wipe-remote; \
		$(MAKE) migrate-remote; \
		$(MAKE) seed-remote-rust; \
	else \
		$(MAKE) destroy-remote; \
		$(MAKE) create-remote; \
	fi
