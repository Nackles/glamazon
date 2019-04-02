DROP DATABASE IF EXISTS glamazon_db;
CREATE DATABASE glamazon_db;

USE glamazon_db;

CREATE TABLE products (
item_id INT(0) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(40) NULL,
department_name VARCHAR(20) NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INT(0) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gold biscuits", "home goods", 24.99, 10), 
("condiments booster back", "grocery", 9.99, 40), 
("comically large scissors", "office supplies", 15.99, 6), 
("16gb flash drive with the whole internet", "office supplies", 14.99, 9), 
("an employee", "perishables", 499.99, 12), 
("one tank of fish - abrams", "vehicles", 999.95, 1), 
("zombie survival kit", "sporting goods", 45.99, 11),
("chocolate-flavored plant protein powder", "grocery", 21.99, 19),
("soft-serve machine", "home goods", 199.99, 7),
("jetpack", "the beyond section", 9999.99, 0),
("idk", "grocery", 999.99, 1);