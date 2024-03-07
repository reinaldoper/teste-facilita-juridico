import createTable from "./createTableQuery.js";

const start = async () => {
  await createTable();
  process.exit(0);
};

start();