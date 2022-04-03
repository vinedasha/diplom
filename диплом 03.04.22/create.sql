-- создать схему регестрации: авторизации
-- создать схему портфолио: табл со студентами, табл с преподователями, табл с инфой по студентам
-- создать схему для функций/процедур
-- создать схему для протоколирования действий

CREATE SCHEMA atr; -- авторизация
CREATE SCHEMA stud; -- основная схема
CREATE SCHEMA func; -- съема для функций
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
	FIO varchar(100) not null
);

CREATE TABLE stud.con --connection, соеденение
(
	id_stud int not null,
	id_teach int not null
);

CREATE TABLE stud.portfol --портфолио студента
(
	id_stud serial primary key,
	FIO varchar(100) not null,
	photo bytea
);

CREATE TABLE stud.doc -- документы
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

-- соеденения 
--atr.login с stud.teach
--stud.doc с stud.portfol
--stud.con c stud.teach
--stud.con c stud.portfol

ALTER TABLE stud.teach ADD FOREIGN KEY (id_login) REFERENCES atr.login(id_login) ON DELETE CASCADE;
ALTER TABLE stud.doc ADD FOREIGN KEY (id_stud) REFERENCES stud.portfol(id_stud) ON DELETE CASCADE;
ALTER TABLE stud.con ADD FOREIGN KEY (id_teach) REFERENCES stud.teach(id_teach) ON DELETE CASCADE;
ALTER TABLE stud.con ADD FOREIGN KEY (id_stud) REFERENCES stud.portfol(id_stud) ON DELETE CASCADE;



-- удаление записей и возращение serial id к 0

--truncate table atr.login restart identity cascade;
--truncate table stud.teach restart identity cascade;
--truncate table stud.portfol restart identity cascade;
--truncate table stud.doc restart identity cascade;
--truncate table prot.protocol restart identity cascade;