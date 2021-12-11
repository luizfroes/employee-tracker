DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
   
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
   
    id INT PRIMARY KEY,
    name VARCHAR(30)
);
