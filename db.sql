CREATE DATABASE order_management;
USE order_management;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO orders (customer_name, order_date, status) VALUES
('Alice', '2024-12-25', 'New'),
('Bob', '2024-12-26', 'Processing'),
('Charlie', '2024-12-27', 'Pending');