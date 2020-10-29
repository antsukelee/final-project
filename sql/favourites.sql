DROP TABLE IF EXISTS favourites;

CREATE TABLE favourites (
    id SERIAL PRIMARY KEY,
    top TEXT,
    bottom TEXT,
    shoes TEXT,
    hat TEXT,
    accessory TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);