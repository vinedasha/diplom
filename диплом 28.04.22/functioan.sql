CREATE OR REPLACE PROCEDURE func.createlogin --создание логинов и паролей и сразу создание учителя
(
	logins varchar,
	passwords varchar,
	su varchar,
	na varchar,
	pa varchar
)
    LANGUAGE 'plpgsql'
AS $$
declare
login_id int;
datatimes timestamp;
begin
SELECT NOW()::timestamp into datatimes;
insert into atr.login(login, password) values
(logins, passwords) returning id_login into login_id;
insert into stud.teach(id_login, surname, name, patronymic) values (login_id, su, na, pa);
insert into prot.protocol(id_login, ivent, date) values (login_id, 'created teacher with '||su||' '||na||' '||pa||'.', datatimes);
insert into prot.protocol(id_login, ivent, date) values (login_id, 'created login with '||logins||' and password='||passwords||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.creastud --создание партфолио студента
(
	id_teachs int,
	su varchar,
	na varchar,
	pa varchar,
	photos bytea,
	bir timestamp,
	ar varchar,
	af varchar,
	numbers int,
	sn int,
	mp varchar,
	pasp varchar,
	ass int,
	FIOm varchar,
	wm varchar,
	nm int,
	FIOf varchar,
	wf varchar,
	nf integer,
	fam varchar,
	nc integer,
	cp varchar,
	acKDN varchar,
	chrdis varchar,
	dis varchar
)
    LANGUAGE 'plpgsql'
AS $$
declare
id_logins int;
datatimes timestamp;
id_studs int;
begin
SELECT NOW()::timestamp into datatimes;
insert into stud.portfol(surname, name, patronymic, photo, birthday, address_reg, address_fact, number, snils, med_pol, passport, average_score, FIO_m, work_m, number_m, FIO_f, number_f, family, num_child, child_pass, acc_KDN, chr_dis, disab) 
values (su, na, pa, photos, bir, ar, af, numbers, sn, mp, pasp,  ass, FIOm, wm, nm, FIOf, wf, nf, fam, nc, cp, acKDN, chrdis, dis) returning id_stud into id_studs;
select stud.teach.id_login from stud.teach where id_teachs = id_teach limit 1 into id_logins;
insert into stud.con values (id_studs, id_teachs);
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'created student with '||su||' '||na||' '||pa||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.addoc --создание документа на студента
(
	id_studs int,
	names varchar,
	documentss bytea
)
 LANGUAGE 'plpgsql'
AS $$
declare
id_docs int;
id_logins int;
datatimes timestamp;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = 
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_logins;
insert into stud.doc(id_stud, name, documents) values (id_studs, names, documentss) returning id_doc into id_docs;
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'add id document with '||id_docs||' and name '||names||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.addachi --создание документа на студента
(
	id_studs int,
	names varchar,
	documentss bytea
)
 LANGUAGE 'plpgsql'
AS $$
declare
id_docs int;
id_logins int;
datatimes timestamp;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = 
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_logins;
insert into stud.achi(id_stud, name, documents) values (id_studs, names, documentss) returning id_doc into id_docs;
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'add id document with '||id_docs||' and name '||names||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updatelogin --изменить логин
(
	id_logins int,
	logins varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
lo varchar;
begin
SELECT NOW()::timestamp into datatimes;
select atr.login.login from atr.login where id_login = id_logins limit 1 into lo;
update atr.login set login = logins where id_login = id_logins;
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'update login with '||lo||' to '||logins||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updatepassword --изменить пароль
(
	id_logins int,
	passwords varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
pass varchar;
begin
SELECT NOW()::timestamp into datatimes;
select atr.login.password from atr.login where id_login = id_logins limit 1 into pass;
update atr.login set password = passwords where id_login = id_logins;
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'update password with '||pass|| ' to '||passwords||'.', datatimes);
end;
$$;


CREATE OR REPLACE PROCEDURE func.updateachidlogin --изменить логин у преподователя
(
	id_teachs int,
	id_logins int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;
update stud.teach set id_login = id_logins where id_teach = id_teachs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated id_login teacher with '||id_l||' to '||id_logins||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updateachfio --изменить фио у преподователя
(
	id_teachs int,
	su varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
fion varchar;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.surname from stud.teach where id_teach = id_teachs limit 1 into fion;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;
update stud.teach set surname = su where id_teach = id_teachs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated fio teacher with '||fion||' to '||su||'.', datatimes);
end;
$$;


CREATE OR REPLACE PROCEDURE func.updateportfolfio --изменить фио у студента
(
	id_studs int,
	su varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
fion varchar;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;--
select stud.portfol.surname from stud.portfol where id_stud = id_studs limit 1 into fion;--
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
update stud.portfol set surname = su where id_stud = id_studs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated fio teacher with '||fion||' to '||su||'.', datatimes);--
end;
$$;


CREATE OR REPLACE PROCEDURE func.updateportfolphoto --обновить фото у студента
(
	id_studs int,
	photos bytea
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
ph bytea;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.portfol.photo from stud.portfol where id_stud = id_studs limit 1 into ph;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
update stud.portfol set photo = photos where id_stud = id_studs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated photo teacher with '||ph||' to '||photos||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updatedocidstud -- поменять студента у документа 
(
	id_docs int,
	id_studs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
id_st int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.doc.id_stud from stud.doc where id_doc = id_docs limit 1 into id_st;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = 
(select stud.doc.id_stud from stud.doc where doc.id_doc = id_docs))) limit 1 into id_l;
update stud.doc set id_stud = id_studs where id_doc = id_docs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated id_stud doc with '||id_st||' to '||id_studs||'.', datatimes);--
end;
$$;

CREATE OR REPLACE PROCEDURE func.updatedocname --изменить имя у документа
(
	id_docs int,
	names varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
namen varchar;
begin
SELECT NOW()::timestamp into datatimes;
select stud.doc.name from stud.doc where id_doc = id_docs limit 1 into namen;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = 
(select stud.doc.id_stud from stud.doc where doc.id_doc = id_docs))) limit 1 into id_l;
update stud.doc set name = names where id_doc = id_docs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated name doc with '||namen||' to '||names||'.', datatimes);--
end;
$$;

CREATE OR REPLACE PROCEDURE func.updatedocdoc --изменить документ 
(
	id_docs int,
	docu bytea
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
d bytea;
begin
SELECT NOW()::timestamp into datatimes;
select stud.doc.documents from stud.doc where id_doc = id_docs limit 1 into d;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = 
(select stud.doc.id_stud from stud.doc where doc.id_doc = id_docs))) limit 1 into id_l;
update stud.doc set documents = docu where id_doc = id_docs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated documents doc with '||d||' to '||docu||'.', datatimes);--
end;
$$;

CREATE OR REPLACE PROCEDURE func.deleteteach -- удалить преподователя и вместе с этим логин на него
(
	id_teachs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;--
delete from atr.login where id_login = (select stud.teach.id_login from stud.teach where id_teach = id_teachs);--
delete from stud.teach where id_teach = id_teachs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete login with '||id_l||' and teach '||id_teachs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deletestud --удалить студента и его документы
(
id_studs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
delete from stud.portfol where id_stud = id_studs;--
delete from stud.doc where id_stud = id_studs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete stud with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deletestudphoto --удалить фото у студента
(
id_studs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
update stud.portfol set photo = '' where id_stud = id_studs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete photo with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deletedoc --удалить выбранный документ
(
id_docs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = 
(select stud.doc.id_stud from stud.doc where doc.id_doc = id_docs))) limit 1 into id_l;
delete from stud.doc where id_doc = id_docs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete doc with '||id_docs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deleteachi --удалить выбранное достижение
(
id_docs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = 
(select stud.achi.id_stud from stud.achi where achi.id_doc = id_docs))) limit 1 into id_l;
delete from stud.achi where id_doc = id_docs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete achi with '||id_docs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deletedocstud --удалить документы выбранного студента
(
id_studs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
delete from stud.doc where id_stud = id_studs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete doc stud with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.deleteachistud --удалить достижения выбранного студента
(
id_studs int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
delete from stud.achi where id_stud = id_studs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'delete achi stud with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE FUNCTION func.selecteach --вывод фио преподователя
(
	id_teachs int
)
    RETURNS TABLE
(
	su varchar,
	na varchar,
	pa varchar
) 
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;--
return query(select stud.teach.surname, stud.teach.name, stud.teach.patronymic from stud.teach where id_teach = id_teachs);
insert into prot.protocol(id_login, ivent, date) values (id_l, 'select teach with '||id_teachs||'.', datatimes);
end;
$$;

CREATE OR REPLACE FUNCTION func.selectstud -- просмотр у данного преподователя его студентов
(
	id_teachs int
)
    RETURNS TABLE
(
	su varchar,
	na varchar,
	pa varchar,
	photo bytea
) 
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;--
return query(select stud.portfol.surname, stud.portfol.name, stud.portfol.patronymic, stud.portfol.photo from stud.portfol where portfol.id_stud in (select stud.con.id_stud from stud.con where con.id_teach = id_teachs));
insert into prot.protocol(id_login, ivent, date) values (id_l, 'select studs teach with '||id_teachs||'.', datatimes);
end;
$$;

CREATE OR REPLACE FUNCTION func.selectstudent -- просмотр студента
(
	id_s int
)
    RETURNS SETOF stud.portfol
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = 
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;--
return query(select * from stud.portfol where id_s = id_stud);
insert into prot.protocol(id_login, ivent, date) values (id_l, 'select studs teach with '||id_teachs||'.', datatimes);
end;
$$;

CREATE OR REPLACE FUNCTION func.selectdoc --просмотр документов у данного студента
(
	id_studs int
)
    RETURNS TABLE
(
	name varchar,
	doc bytea
) 
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = 
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;--
return query(select stud.doc.name, stud.doc.documents from stud.doc where id_stud = id_studs);
insert into prot.protocol(id_login, ivent, date) values (id_l, 'select doc stud with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE FUNCTION func.selectachi --просмотр достижений у данного студента
(
	id_studs int
)
    RETURNS TABLE
(
	name varchar,
	doc bytea
) 
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.id_login from stud.teach where teach.id_teach = 
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;--
return query(select stud.achi.name, stud.achi.documents from stud.achi where id_stud = id_studs);
insert into prot.protocol(id_login, ivent, date) values (id_l, 'select doc stud with '||id_studs||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.drop --удалить все
(

)
LANGUAGE 'plpgsql'
AS $$
declare
begin
delete from atr.login;
truncate table atr.login restart identity cascade;
delete from stud.teach;
truncate table stud.teach restart identity cascade;
delete from stud.portfol;
delete from stud.con;
truncate table stud.portfol restart identity cascade;
delete from stud.achi;
truncate table stud.achi restart identity cascade;
delete from stud.doc;
truncate table stud.doc restart identity cascade;
delete from prot.protocol;
truncate table prot.protocol restart identity cascade;
drop table atr.login cascade;
drop table stud.teach cascade;
drop table stud.portfol cascade;
drop table stud.con cascade;
drop table stud.achi cascade;
drop table stud.doc cascade;
drop table prot.protocol cascade;
drop schema atr;
drop schema prot;
drop schema stud;
end;
$$;









