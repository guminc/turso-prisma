# Makefile

# Include the .env file
-include .env
export

# Default target
all: migrate-users-to-prod

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
	for file in ./dump/scatter/*.bson; do \
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

seed-prod-rust:
	node --max_old_space_size=8024 --require ts-node/register ./scripts/migrate.ts --source=$(source) --write=prod

reset-local:
	$(MAKE) wipe-local
	$(MAKE) create-migration

seed-local-tables:
	node --max_old_space_size=8024 --expose-gc --require ts-node/register ./scripts/migrate.ts --source=$(source) --write=local

build-rust-binary:
	cargo build --release --manifest-path ./scripts/rust/Cargo.toml

migrate-users-to-prod:
	./scripts/echo.sh
	@if [ "$(source)" = "file" ]; then \
	    $(MAKE) dump-mongo-everything; \
		$(MAKE) convert-bson-to-json; \
	fi
	$(MAKE) reset-local; \
	$(MAKE) build-rust-binary; \
	$(MAKE) seed-local-tables; \
	$(MAKE) dump-local; \
	$(MAKE) wipe-prod; \
	$(MAKE) seed-prod; \

dump-local:
	sqlite3 ./prisma/dev.db '.output ./dump.sql' '.dump'

baseline:
	mkdir -p prisma/migrations/0_init
	npx prisma migrate diff \
		--from-empty \
		--to-schema-datamodel prisma/schema.prisma \
		--script > prisma/migrations/0_init/migration.sql
