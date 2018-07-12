DROP DATABASE IF EXISTS userInfo;
CREATE DATABASE userInfo;
USE userInfo;

CREATE TABLE users(
	first_name TEXT (10),
	last_name TEXT (10),
	email VARCHAR (20),
	password VARCHAR (20)
	);

CREATE TABLE users_address(
	street_name VARCHAR (20),
	city_name VARCHAR (20),
	state_name VARCHAR (20),
	zip_code INT (10)
	);

CREATE TABLE users_banking(
	credit_card INT (20),
	exp_date DATE,
	cvv_num INT (10),
	zip_code INT (10)
	);