-- процедура на создание чего либо
	-- регистр
--1		-- создание логинов и паролей++
	-- учителя
--2		-- создание учителя++
	-- студент
--3		-- создание партфолио студента++
	-- доки
--4		-- создание документа на студента++

-- процедура на обновление/изменение данных
	--регистр
--5		-- обновить пароль++
--6		-- обновить логин++
	-- Учитель
--7		-- обновить логин++
--8		--обновить ФИО++
--9		--Обновить группу++
	--Студент
--10	--обновить ФИО++
--11	--Обновить группу++
--12	--Обновить фото++
	--документы
--13	--обновить id студента++
--14	--Обновить имя
--15	--обновить документ
		
--  процедура на удадение данных
	--учитель
--16	-- удалить учителя
	--студент
--17	-- удалить студента
--18	-- удалить фото
	--регстр
--19	-- удалить логин пароль
--20	-- может удалять сразу при удаление препода
	-- документ
--21	-- удалить документ
--22	-- удалить все документы на студента
		
-- функции Просмотр инфы для сайта 
	-- учитель
--23	-- просмотр учительского профиля/ вывод фио препода
	-- студенты
--24	-- блок про студентов зашедшего препода
	-- доки
--25	-- документы кнопку студента, которого нажали
		
	-- добовление данных	
CREATE OR REPLACE PROCEDURE func.createlogin --FUNCTION
(
	logins varchar,
	passwords varchar
)
 --   RETURNS SETOF tabl_name /  RETURNS TABLE tabl_name(stolbsi)
    LANGUAGE 'plpgsql'
AS $$
declare
login_id int;
datatimes timestamp;
begin
SELECT NOW()::timestamp into datatimes;
insert into atr.login(login, password) values
(logins, passwords) returning id_login into login_id;
--return query (select * from tabl.account where id_acc = acc_id );
insert into prot.protocol(id_login, ivent, date) values (login_id, 'created login with '||logins||' and password='||passwords||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.createach 
(
	id_logins int,
	fios varchar,
	groupas int
)
    LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
begin
SELECT NOW()::timestamp into datatimes;
insert into stud.teach(id_login, fio, groupa) values
(id_logins, fios, groupas);
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'created teacher with '||fios||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.creastud 
(
	id_teachs int,
	fios varchar,
	groupas int,
	photos bytea
)
    LANGUAGE 'plpgsql'
AS $$
declare
id_logins int;
datatimes timestamp;
id_studs int;
begin
SELECT NOW()::timestamp into datatimes;
insert into stud.portfol(fio, groupa, photo) values
(fios, groupas, photos)returning id_stud into id_studs;
select stud.teach.id_login from stud.teach where id_teachs = id_teach limit 1 into id_logins;
insert into stud.con values (id_studs, id_teachs);
insert into prot.protocol(id_login, ivent, date) values (id_logins, 'created student with '||fios||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.addoc 
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

CREATE OR REPLACE PROCEDURE func.updatelogin
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

CREATE OR REPLACE PROCEDURE func.updatepassword
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


CREATE OR REPLACE PROCEDURE func.updateachidlogin
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

CREATE OR REPLACE PROCEDURE func.updateachfio
(
	id_teachs int,
	fios varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
fion varchar;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.fio from stud.teach where id_teach = id_teachs limit 1 into fion;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;
update stud.teach set fio = fios where id_teach = id_teachs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated fio teacher with '||fion||' to '||fios||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updateachgroupa
(
	id_teachs int,
	groupas int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
gr int;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.teach.groupa from stud.teach where id_teach = id_teachs limit 1 into gr;
select stud.teach.id_login from stud.teach where id_teach = id_teachs limit 1 into id_l;
update stud.teach set groupa = groupas where id_teach = id_teachs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated groupa teacher with '||gr||' to '||groupas||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updateportfolfio
(
	id_studs int,
	fios varchar
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
fion varchar;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;--
select stud.portfol.fio from stud.portfol where id_stud = id_studs limit 1 into fion;--
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
update stud.portfol set fio = fios where id_stud = id_studs;--
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated fio teacher with '||fion||' to '||fios||'.', datatimes);--
end;
$$;

CREATE OR REPLACE PROCEDURE func.updateportfolgroupa
(
	id_studs int,
	groupas int
)
LANGUAGE 'plpgsql'
AS $$
declare
datatimes timestamp;
gr int;
id_l int;
begin
SELECT NOW()::timestamp into datatimes;
select stud.portfol.groupa from stud.portfol where id_stud = id_studs limit 1 into gr;
select stud.teach.id_login from stud.teach where teach.id_teach = --
(select stud.con.id_teach from stud.con where con.id_stud = 
(select stud.portfol.id_stud from stud.portfol where  portfol.id_stud = id_studs)) limit 1 into id_l;
update stud.portfol set groupa = groupas where id_stud = id_studs;
insert into prot.protocol(id_login, ivent, date) values (id_l, 'Updated groupa teacher with '||gr||' to '||groupas||'.', datatimes);
end;
$$;

CREATE OR REPLACE PROCEDURE func.updateportfolphoto
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

CREATE OR REPLACE PROCEDURE func.updatedocidstud
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

CREATE OR REPLACE PROCEDURE func.updatedocname
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

CREATE OR REPLACE PROCEDURE func.updatedocdoc
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