DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_url TEXT,
    category VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    -- user_id INT REFERENCES users(id)

    -- INSERT INTO items (item_url, category) VALUES ('https://s3.amazonaws.com/spicedling/lS6R6Bonz0rqJHS2shl5AMER0DlDzV6Q.png', 'top');

    -- INSERT INTO items (item_url, category) VALUES ('https://s3.amazonaws.com/spicedling/QjL62e4y3zmmcKES_93WCjabeXK2dhU5.png', 'bottom');

    -- INSERT INTO items (item_url, category) VALUES ('https://s3.amazonaws.com/spicedling/PFrPeXP6wziYTfH2MxhdC0FC8BPnhPiX.png', 'shoes');
