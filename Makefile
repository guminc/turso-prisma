# Makefile

# Include the .env file
-include .env
export

# Default target
all: migrate-users-to-prod

create-migration:
	npx prisma migrate dev
# npx prisma migrate dev

dump-mongo-everything:
	./scripts/echo.sh
	mongodump --forceTableScan --uri $$MONGO_URI

dump-mongo-users:
	./scripts/echo.sh
	mongodump --collection=Users --forceTableScan --uri $$MONGO_URI

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

reset-local:
	$(MAKE) wipe-local
	$(MAKE) create-migration

seed-local-users:
	npx ts-node ./scripts/migrate.ts --source=$(source)

migrate-users-to-prod:
	./scripts/echo.sh
	@if [ "$(source)" = "file" ]; then \
		$(MAKE) dump-mongo-users; \
	fi
	$(MAKE) reset-local
	$(MAKE) seed-local-users
	$(MAKE) dump-local
	$(MAKE) wipe-prod
	$(MAKE) seed-prod

dump-local:
	sqlite3 ./prisma/dev.db '.output ./dump.sql' '.dump'

baseline:
	mkdir -p prisma/migrations/0_init
	npx prisma migrate diff \
		--from-empty \
		--to-schema-datamodel prisma/schema.prisma \
		--script > prisma/migrations/0_init/migration.sql
