const { exec } = require("child_process");
const REMOTE_DB_NAME = process.env.REMOTE_DB_NAME;

// Function to run a command and get the output as an array
function getArrayFromCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      } else {
        const array = stdout
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean)
          .filter((table) => !table.startsWith("sqlite_"))
          .sort((a, b) => {
            // drop the User table last because a lot of tables have foreign key constraints to it
            if (a === "User") return 1;
            if (b === "User") return -1;

            // due to foreign key constraints, we need to drop joining tables first. Those tables start with _
            if (a.startsWith("_") && !b.startsWith("_")) {
              return -1;
            } else if (!a.startsWith("_") && b.startsWith("_")) {
              return 1;
            } else {
              return 0;
            }
          });

        resolve(array);
      }
    });
  });
}

// Function to drop a table or index
function dropItem(item, type) {
  exec(
    `turso db shell --location iad ${REMOTE_DB_NAME} "DROP ${type} IF EXISTS ${item}"`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
      } else {
        console.log(`${type} ${item} dropped.`);
      }
    }
  );
}

// Get all table names and drop them
getArrayFromCommand(
  `turso db shell --location iad ${REMOTE_DB_NAME} ".tables"`
).then((tables) => {
  tables.forEach((table) => dropItem(table, "TABLE"));
});

// Get all index names and drop them
getArrayFromCommand(
  `turso db shell --location iad ${REMOTE_DB_NAME} ".indexes"`
).then((indexes) => {
  indexes.forEach((index) => dropItem(index, "INDEX"));
});
