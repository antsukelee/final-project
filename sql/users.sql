-- registration
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    f_name VARCHAR NOT NULL,
    l_name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    profilePic TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);