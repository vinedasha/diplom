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

