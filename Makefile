# Makefile

# Include the .env file
-include .env
export

# Default target
all: migrate-users-to-prod

create-migration:
	npx prisma migrate dev

dump-mongo-everything:
	./scripts/echo.sh
	mongodump --forceTableScan --uri $$MONGO_URI

dump-mongo-users:
	./scripts/echo.sh
	mongodump --collection=Users --forceTableScan --uri $$MONGO_URI

dump-mongo-collections:
	./scripts/echo.sh
	mongodump --collection=Collections --forceTableScan --uri $$MONGO_URI

wipe-prod:
	turso db shell $$REMOTE_DB_NAME < ./prisma/reset/dropTables.sql

wipe-local:
	sqlite3 ./prisma/dev.db < ./prisma/reset/dropTables.sql

seed-prod:
	turso db shell $$REMOTE_DB_NAME < ./dump.sql

reset-local:
	$(MAKE) wipe-local
	$(MAKE) create-migration

seed-local-users:
	npx ts-node ./scripts/migrate.ts --source=$(source)

migrate-prod:
	for file in ./prisma/migrations/*/*.sql; do \
		turso db shell $$REMOTE_DB_NAME < $$file; \
	done

seed-prod-rust:
	npx ts-node ./scripts/migrate.ts --source=$(source) --write='rust'

migrate-users-to-prod:
	./scripts/echo.sh
	@if [ "$(source)" = "file" ]; then \
		$(MAKE) dump-mongo-users; \
		$(MAKE) dump-mongo-collections; \
	fi
	@if [ "$(write)" = "rust" ]; then \
		$(MAKE) wipe-prod; \
		$(MAKE) migrate-prod; \
		$(MAKE) seed-prod-rust; \
	else \
		$(MAKE) reset-local; \
		$(MAKE) seed-local-users; \
		$(MAKE) dump-local; \
		$(MAKE) wipe-prod; \
		$(MAKE) seed-prod ;\
	fi

dump-local:
	sqlite3 ./prisma/dev.db '.output ./dump.sql' '.dump'


