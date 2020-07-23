// add INSERT query to upload an image
const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:Antsuke:postgres@localhost:5432/final-project`
);

// UPLOAD PICTURE // INSERT
module.exports.uploadItem = (item_url) => {
    return db.query(
        `INSERT INTO items (item_url)
        VALUES ($1) 
        RETURNING *`,
        [item_url]
    );
};

// TO RENDER PICTURE // SELECT
// module.exports.getWardrobeItems = () => {
//     return db.query(`SELECT item_url, category FROM items;`);
// };
