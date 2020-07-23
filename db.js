// add INSERT query to upload an image
const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:Antsuke:postgres@localhost:5432/final-project`
);

// UPLOAD PICTURE // INSERT
module.exports.uploadItem = (item_url, category) => {
    return db.query(
        `INSERT INTO items (item_url, category)
        VALUES ($1, $2) 
        RETURNING *`,
        [item_url, category]
    );
};

// TO RENDER PICTURE // SELECT
module.exports.getWardrobeItems = () => {
    return db.query(`SELECT item_url, id FROM items;`);
};
