-- CREATE DATABASE Restaurant;
CREATE TABLE
    Reservation (
        -- not entered by user
        id INT PRIMARY key auto_increment NOT NULL,
        last_name VARCHAR(75) NOT NULL,
        table_number VARCHAR(3) NOT NULL,
        guests INT NOT NULL,
        phone_number VARCHAR(9) NOT NULL
    );