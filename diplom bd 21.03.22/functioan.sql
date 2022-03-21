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

