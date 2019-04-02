DROP DATABASE IF EXISTS product_db;
CREATE DATABASE product_db;
USE product_db;

CREATE TABLE product
(
    product_id INTEGER(10)
    AUTO_INCREMENT,
    item_name VARCHAR
    (30) NOT NULL,
    current_bid INTEGER
    (10),
    PRIMARY KEY
    (product_id)
);

    INSERT INTO product
        (item_name, current_bid)
    VALUES
        ("booster pack magic cards", 0),
        ("wizard figurine" , 0),
        ("apple", 0),
        ("First born child", 0);