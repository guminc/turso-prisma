# Makefile

# Include the .env file
-include .env
export

# Default target
all: migrate-to-prod

create-migration:
	npx prisma migrate dev
	npx prettier --write ./types/generated/index.ts

dump-mongo-everything:
	mongodump --forceTableScan --uri $$MONGO_URI

dump-mongo-users:
	mongodump --collection=Users --forceTableScan --uri $$MONGO_URI

dump-mongo-collections:
	mongodump --collection=Collections --forceTableScan --uri $$MONGO_URI

dump-mongo-nfts:
	mongodump --collection=NFTs --forceTableScan --uri $$MONGO_URI

convert-bson-to-json:
	for file in ./dump/Scatter/*.bson; do \
		bsondump --outFile "$${file%.bson}.json" "$$file"; \
	done

migrate-prod:
	for file in ./prisma/migrations/*/*.sql; do \
		turso db shell --location iad $$REMOTE_DB_NAME < $$file; \
	done

# running this twice as a hack to get around foreign keys constraints
wipe-prod:
	node ./scripts/dropAllTables.js
	node ./scripts/dropAllTables.js

wipe-local:
	rm -rf ./prisma/dev.db
	sqlite3 ./prisma/dev.db ".quit"

seed-prod:
	turso db shell --location iad $$REMOTE_DB_NAME < ./dump.sql

create-prod:
	turso db create $$REMOTE_DB_NAME --from-file ./prisma/dev.db

destroy-prod:
	yes | turso db destroy $$REMOTE_DB_NAME

seed-prod-rust:
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

migrate-to-prod:
	./scripts/echo.sh
	@if [ "$(source)" = "file" ]; then \
	    $(MAKE) dump-mongo-everything; \
		$(MAKE) convert-bson-to-json; \
	fi
	@if [ "$(write)" = "rust" ]; then \
		$(MAKE) reset-local; \
		$(MAKE) build-rust-binary; \
		$(MAKE) seed-local-tables; \
		$(MAKE) wipe-prod; \
		$(MAKE) migrate-prod; \
		$(MAKE) seed-prod-rust; \
	fi
	else \
		$(MAKE) reset-local; \
		$(MAKE) build-rust-binary; \
		$(MAKE) seed-local-tables; \
		$(MAKE) destroy-prod; \
		$(MAKE) create-prod; \

dump-local:
	sqlite3 ./prisma/dev.db '.output ./dump.sql' '.dump'

baseline:
	mkdir -p prisma/migrations/0_init
	npx prisma migrate diff \
		--from-empty \
		--to-schema-datamodel prisma/schema.prisma \
		--script > prisma/migrations/0_init/migration.sql
