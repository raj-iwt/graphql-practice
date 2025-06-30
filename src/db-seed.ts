import db from './db.js';
import { posts, comments } from './db-data.js';
import { text } from 'stream/consumers';

const postInserts = posts.map(({title, author, text}) => {
    return `('${title}', '${author}', '${text}')`;
}).join(', ');

const commentInserts = comments.map(({postId, text}) => {
    return `(${postId}, '${text}')`;
}).join(', ');

const sql = `
    BEGIN;
    INSERT INTO post (title, author, text) VALUES ${postInserts};
    INSERT INTO comment (postId, text) VALUES ${commentInserts};
    COMMIT;
`;

try {
    db.exec(sql);
    console.log("Database seeded successfully.");
}
catch (error) {
    console.error("Error seeding database:", error);
}