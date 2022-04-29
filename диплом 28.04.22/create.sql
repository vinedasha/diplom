-- создать схему регестрации: авторизации
-- создать схему портфолио: табл со студентами, табл с преподователями, табл с инфой по студентам
-- создать схему для функций/процедур
-- создать схему для протоколирования действий

CREATE SCHEMA atr; -- авторизация
CREATE SCHEMA stud; -- основная схема
--CREATE SCHEMA func; -- съема для функций
CREATE SCHEMA prot; -- схема протоколирования

CREATE TABLE atr.login --логины
(
	id_login serial primary key,
	login varchar(30) not null,
	password varchar(30) not null
);

CREATE TABLE stud.teach --преподователи
(
	id_teach serial primary key,
	id_login int not null,
	CONSTRAINT logi UNIQUE (id_login),
	surname varchar(100) not null,
	name varchar(50) not null,
	patronymic varchar(100) not null
);

CREATE TABLE stud.con --connection, соеденение
(
	id_stud int not null,
	id_teach int not null
);

CREATE TABLE stud.portfol --портфолио студента
(
	id_stud serial primary key,
	surname varchar(100) not null,
	name varchar(50) not null,
	patronymic varchar(100) not null,
	photo bytea,
	birthday timestamp,
	address_reg varchar(300),
	address_fact varchar(300),
	number int,
	check (number > 11),
	snils int,
	med_pol varchar(100),
	passport varchar(100),
	average_score int,
	check (Average_score > 3),
	FIO_m varchar(100),
	work_m varchar(50),
	number_m int,
	check (number_m > 11),
	FIO_f varchar(100),
	work_f varchar(50),
	number_f integer,
	check (number_f > 11),
	family varchar(9),
	num_child integer,
	check (num_child > 2),
	child_pass varchar(3),
	acc_KDN varchar(3),
	chr_dis varchar(100),
	disab varchar(3)
);

CREATE TABLE stud.doc -- личн документы
(
	id_doc serial primary key,
	id_stud int not null,
	name varchar,
	documents bytea
);

CREATE TABLE stud.achi -- достижения
(
	id_doc serial primary key,
	id_stud int not null,
	name varchar,
	documents bytea
);

CREATE TABLE prot.protocol -- протоколирование, запись всего что происходит
(
	id_prot serial,
	id_login int not null,
	ivent varchar (500) not null,
	date timestamp
);

ALTER TABLE stud.teach ADD FOREIGN KEY (id_login) REFERENCES atr.login(id_login) ON DELETE CASCADE;
ALTER TABLE stud.doc ADD FOREIGN KEY (id_stud) REFERENCES stud.portfol(id_stud) ON DELETE CASCADE;
ALTER TABLE stud.achi ADD FOREIGN KEY (id_stud) REFERENCES stud.portfol(id_stud) ON DELETE CASCADE;
ALTER TABLE stud.con ADD FOREIGN KEY (id_teach) REFERENCES stud.teach(id_teach) ON DELETE CASCADE;
ALTER TABLE stud.con ADD FOREIGN KEY (id_stud) REFERENCES stud.portfol(id_stud) ON DELETE CASCADE;
