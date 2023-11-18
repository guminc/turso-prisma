#!/bin/bash

# If running directly (without Makefile), source .env file
# like this:
# 		set -a; . ./.env; set +a;

echo -e "TURSO_DATABASE_URL=$TURSO_DATABASE_URL\n"
echo -e "TURSO_AUTH_TOKEN=$TURSO_AUTH_TOKEN\n"
echo -e "MONGO_URI=$MONGO_URI\n"
