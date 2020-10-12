DROP TABLE IF EXISTS favourites;

CREATE TABLE favourites (
    id SERIAL PRIMARY KEY,
    array_of_item_urls TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);