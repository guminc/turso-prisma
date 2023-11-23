#!/bin/bash

# DB_PATH="./prisma/dev.db"

# sqlite3 $DB_PATH "SELECT name FROM sqlite_master WHERE type='table';" | while read table_name; do
#   sqlite3 $DB_PATH "DROP TABLE IF EXISTS $table_name;"
# done

turso db shell scatter-prod "select name from sqlite_master where type = 'table';"

echo $REMOTE_DB_NAME

# turso db shell scatter-prod "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';" | while read table_name; do
#   turso db shell scatter-prod "DROP TABLE IF EXISTS $table_name;"
# done

turso db shell scatter-prod "DELETE FROM sqlite_master WHERE name NOT LIKE 'sqlite_%' AND type IN ('table', 'view');"