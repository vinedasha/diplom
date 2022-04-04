call func.createlogin('masha484', 'p@ssw0rd', 'Маша Рогатина Сергеевна'); --1
call func.createlogin('pasha485', 'p@ssw0rd', 'Павел Любов Андреевич'); --2
call func.createlogin('sasha484', 'p@ssw0rd', 'Александр Виртовский Александров'); --3

call func.creastud(1, 'Виноградова Дарья Андреевна', ''); --1
call func.creastud(2, 'Бобров Даниил Андреевич', ''); --2
call func.creastud(2, 'Максим Серебряков Андреевич', ''); --3
call func.creastud(3, 'Пестов Владимир Тихонович', ''); --4
call func.creastud(3, 'Дорофеев Ярослав Проклович', ''); --5
call func.creastud(3, 'Афанасьев Нисон Альбертович', ''); --6

call func.addoc(1, 'военник', ''); --1
call func.addoc(1, 'копия паспорта', ''); --2
call func.addoc(2, 'копия паспорта', '');--3
call func.addoc(2, 'копия снилса', '');--4
call func.addoc(3, 'справка', '');--5
call func.addoc(4, 'копия загран паспорта', '');--6
call func.addoc(5, 'копия свидетельства о рождение', '');--7
call func.addoc(6, 'военник', '');--8
call func.addoc(6, 'копия паспорта', '');--9
call func.addoc(6, 'копия загран паспорта', '');--10


call func.updatelogin(1, 'dasha');
call func.updatepassword(1, 'Passw');
call func.updateachidlogin(2, 2);
call func.updateachfio(2, 'Cаша Романовна Сергеевна' );
call func.updateportfolfio(1, 'Бобр');
call func.updateportfolphoto(1, '');
call func.updatedocidstud(2, 2);
call func.updatedocname(3, 'Билет');
call func.updatedocdoc(3, '');
call func.deleteteach(3);
call func.deletestud(1);
call func.deletestudphoto(2);
call func.deletedoc(12);
call func.deletedocstud(5);