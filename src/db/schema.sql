DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role(
   
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary DECIMAL(7, 2) NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES department(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
   
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    roleId INT,
    managerId INT,
    FOREIGN KEY (roleId) REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (managerId) REFERENCES employee(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);