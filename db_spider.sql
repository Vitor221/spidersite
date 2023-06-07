create database db_spider;
use db_spider;

create table if not exists tb_login (
id int auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100),
telefone varchar(100),
dt_nascimento date,
constraint pk_id
	primary key(id)
);