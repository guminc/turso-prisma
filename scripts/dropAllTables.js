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
          .filter((table) => !table.startsWith("sqlite_"));
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
