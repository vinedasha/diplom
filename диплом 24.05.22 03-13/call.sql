call func.createlogin('masha484', 'p@ssw0rd', 'Маша', 'Рогатина', 'Сергеевна'); --1
call func.createlogin('pasha485', 'p@ssw0rd', 'Павел', 'Любов', 'Андреевич'); --2
call func.createlogin('sasha484', 'p@ssw0rd', 'Александр', 'Виртовский', 'Александров'); --3

call func.creastud(1, 'Виноградова', 'Дарья', 'Андреевна', '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет', 'нет', 'нет'); --1
call func.creastud(2, 'Бобров', 'Даниил', 'Андреевич',  '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет',  'нет', 'нет'); --2
call func.creastud(2, 'Максим', 'Серебряков', 'Андреевич',  '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет',  'нет', 'нет'); --3
call func.creastud(3, 'Пестов', 'Владимир', 'Тихонович',  '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет', 'нет', 'нет'); --4
call func.creastud(3, 'Дорофеев', 'Ярослав', 'Проклович',  '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет', 'нет', 'нет'); --5
call func.creastud(3, 'Афанасьев', 'Нисон', 'Альбертович',  '2002.03.22', 'Budapeshtskay 4', 
				   'Budapeshtskay 4', 89500066401, 57841235, 56853526, 
				   'Серия: 4015 номер: 499821 дата выдачи: 01.04.2016 Выдан: УМФС РОСИИ', 3.94, 
				   'Абрикосова Рената Романовна', 'Бухгалтер', 89500066401, 'Виноградов Андрей Борисович', 
				   'Мастер ремонтов холодильников', 89500066401, 'Не полная', 1,  'нет', 'нет', 'нет', 'нет'); --6

call func.addoc(1, 'военник',  pg_read_file('C:\Games\voenic.docx')::bytea); --1
call func.addoc(1, 'копия паспорта',  null); --2
call func.addoc(2, 'копия паспорта',  null);--3
call func.addoc(2, 'копия снилса',null);--4
call func.addoc(3, 'справка', null);--5
call func.addoc(4, 'копия загран паспорта', null);--6
call func.addoc(5, 'копия свидетельства о рождение', null);--7
call func.addoc(6, 'военник', null);--8
call func.addoc(6, 'копия паспорта',null);--9
call func.addoc(6, 'копия загран паспорта',null);--10

call func.addachi(1, 'Победа', '');--1
call func.addachi(2, 'Победа', '');--2
call func.addachi(3, 'Победа', '');--3
call func.addachi(3, 'Победа', '');--4
call func.addachi(3, 'Победа', '');--5
call func.addachi(4, 'Победа', '');--6
call func.addachi(4, 'Победа', '');--7
call func.addachi(5, 'Победа', '');--8
call func.addachi(6, 'Победа', '');--9
call func.addachi(6, 'Победа', '');--10
call func.addachi(6, 'Победа', '');--11


call func.updatelogin(1, 'dasha484');
call func.updatepassword(1, 'Passw');
call func.updateachfio(2, 'Романовна' );
call func.updateportfolfio(1, 'Бобр');
call func.updateportfolphoto(1, '');
call func.updatedocidstud(6, 3);
call func.updateachidstud(7, 3);
call func.updatedocname(3, 'Билет');
call func.updateachiname(3, 'Олимпиада');
call func.updatedocdoc(3, '');
call func.updatedocachi(4, '');

call func.deleteteach(3);
call func.deletestud(5);
call func.deletedocstud(5);
call func.deleteachistud(4);
call func.deletestudphoto(2);
call func.deletedoc(10);
call func.deleteachi(2);
call func.deleteachistud(5);
call func.deleteachi(5);

--call  func.drop();