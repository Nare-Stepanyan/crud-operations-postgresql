import fs from "fs-extra";
import path from "path";
import { adminPool, pool } from "./database";

const dbTableSqlPath = path.join(__dirname, "./createTable.sql");
const createTablesSQL = fs.readFileSync(dbTableSqlPath, "utf8");

const createDatabaseAndTables = async () => {
  let db;
  try {
    const adminClient = await adminPool.connect();
    console.log("Connected to admin (postgres)");

    const dbName = process.env.DB_NAME;
    const dbCheckResult = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`
    );

    if (dbCheckResult.rowCount === 0) {
      await adminClient.query(`CREATE DATABASE ${dbName};`);
      console.log(`Database ${dbName} created.`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
    adminClient.release();

    db = await pool.connect();
    await db.query(createTablesSQL);
    console.log("Tables created.");
  } catch (err) {
    console.error("Error during database creation:", err);
  } finally {
    if (db) {
      db.release();
    }
  }
};

export default createDatabaseAndTables;
