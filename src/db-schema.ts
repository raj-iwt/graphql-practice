import db from './db.js';

const sql = `
    BEGIN;
    CREATE TABLE IF NOT EXISTS post (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        text TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS comment (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        postId INTEGER NOT NULL,
        text TEXT NOT NULL,
        FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE
    );

    COMMIT;
`;


try {
    db.exec(sql);
    console.log("Database schema created successfully.");
}
catch (error) {
    console.error("Error creating database schema:", error);
}