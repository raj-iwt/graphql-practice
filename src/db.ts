import Database from 'better-sqlite3';


const dbFile = process.env.DB_FILE || 'db.sqlite';
const db = new Database(dbFile, { verbose: console.log });

export default db;