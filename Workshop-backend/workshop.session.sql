CREATE TABLE users (
    user_id SERIAL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    activated BOOLEAN DEFAULT FALSE,
    temporaryToken VARCHAR(255),
    role VARCHAR Default 'admin',
    CONSTRAINT user_id_pk PRIMARY KEY (user_id),
    CONSTRAINT email_uk UNIQUE (email)
);

CREATE TABLE products (
    product_id SERIAL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    regularPrice BOOLEAN NOT NULL,
    salePrice BOOLEAN NOT NULL,
    quantity BOOLEAN NOT NULL,
    length BOOLEAN NOT NULL,
    height BOOLEAN NOT NULL,
    width BOOLEAN NOT NULL,
    weight BOOLEAN NOT NULL,
    color VARCHAR(255) NOT NULL,
    quality VARCHAR(255) NOT NULL,
    description VARCHAR(1000) NOT NULL,

)