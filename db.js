// add INSERT query to upload an image
const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:Antsuke:postgres@localhost:5432/final-project`
);

///// REG AND LOG IN //////
// INSERT QUERY registration details
module.exports.userRegistration = (f_name, l_name, email, password) => {
    // console.log("DB log of userRegistration F_NAME: ", f_name);
    return db.query(
        `INSERT INTO users (f_name, l_name, email, password) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`,
        [f_name, l_name, email, password]
    );
};

// LOGIN

module.exports.checkLogin = (email) => {
    // console.log("DB log of email: ", email);
    return db.query(
        `SELECT id, password
        FROM users 
        WHERE email = $1`,
        [email]
    );
};

// UPLOAD PICTURE // INSERT
module.exports.uploadItem = (item_url, category) => {
    return db.query(
        `INSERT INTO items (item_url, category)
        VALUES ($1, $2) 
        RETURNING *;`,
        [item_url, category]
    );
};

// TO RENDER PICTURES IN WARDROBE // SELECT
module.exports.getWardrobeItems = () => {
    return db.query(`SELECT item_url, category, id FROM items;`);
};

// TO RENDER ONLY A CERTAIN CATEGORY'S ITEMS // SELECT
module.exports.getTops = () => {
    return db.query(
        `SELECT item_url, category, id FROM items WHERE category = 'top';`
    );
};
module.exports.getBottoms = () => {
    return db.query(
        `SELECT item_url, category, id FROM items  WHERE category = 'bottom';`
    );
};
module.exports.getShoes = () => {
    return db.query(
        `SELECT item_url, category, id FROM items WHERE category = 'shoes';`
    );
};
module.exports.getAccessories = () => {
    return db.query(
        `SELECT item_url, category, id FROM items WHERE category = 'accessories';`
    );
};
module.exports.getHats = () => {
    return db.query(
        `SELECT item_url, category, id FROM items WHERE category = 'hats';`
    );
};
