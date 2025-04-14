create database blogs_db;

use blogs_db;

create table user(id int primary key auto_increment,
full_name varchar(50), email varchar(30), phone_no varchar(10),create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);


create table categories(id int primary key auto_increment,title varchar(30),description varchar(50));

create table blogs(id int primary key auto_increment,
title VARCHAR(20),contents varchar(30),created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, user_id int, category_id int,
Foreign Key (user_id) REFERENCES user(id),
Foreign Key (category_id) REFERENCES categories(id)
)