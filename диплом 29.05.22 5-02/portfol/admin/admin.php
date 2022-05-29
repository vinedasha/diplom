<!DOCTYPE html>

<html lang="ru">
    <head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<title>Админовская страница</title>
</head>
<body>
        <style type="text/css">
    body{    background-image: url("/b2.png");}
    .updatesuteach {
            width: 290px;
            height: 200px;
            position: fixed;
            left: 2%;
            top: 3%;
        }
            .udatepass {
            width: 290px;
            height: 200px;
            position: fixed;
            left: 26%;
            top: 3%;
        }
        .updatesuportfol {
            width: 290px;
            height: 200px;
            position: fixed;
            left: 50%;
            top: 3%;
        }
        .prot {
            width: 500px;
            height: 500px;
            position: fixed;
            left: 2%;
            top: 40%;
        }
        .exit{
            width: 50px;
            height: 50px;
            position: fixed;
            left: 80%;
            top: 15%;
        }
        .delteach {
            width: 200px;
            height: 140px;
            position: fixed;
            left: 45%;
            top: 39%;
        }
        .delstud {
            width: 200px;
            height: 140px;
            position: fixed;
            left: 65%;
            top: 39%;
        }
        .del {
            width: 150px;
            height: 70px;
            position: fixed;
            left: 57%;
            top: 71%;
        }
        .input {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        }
        .btn-success {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        }
            </style>
            
            <div class="updatesuteach">
                <p align="center">Изменить фамилию преподователю</p>
                <p id="sut" align="center"></p>
            <script src="./teach/teach.js"></script>  
                <input type="text" class="input" id="id_t" placeholder="id преподователя">
                <input type="text" class="input" id="su" placeholder="Новая фамилия">
                <button id="updatsu" class="btn btn-success" type="button">Изменить фамилию</button>
            </div>
            <div class="udatepass">
               <p align="center">Изменить пароль</p>
               <p id="pas" align="center"></p>
               <script src="./pass/pass.js"></script> 
                <input type="text" class="input" id="id_l" placeholder="id логина преподователя">
                <input type="text" class="input" id="pass" placeholder="Новый пароль">
                <button id="updatpass" class="btn btn-success" type="button">Изменить пароль</button>  
            </div>
            <div class="updatesuportfol">
                <p align="center">Изменить фамилию студенту</p>
            <p id="sust" align="center"></p>
            <script src="./stud/stud.js"></script> 
                <input type="text" class="input" id="id_st" placeholder="id студента">
                <input type="text" class="input" id="sus" placeholder="Новая фамилия">
                <button id="updatsuatud" class="btn btn-success" type="button">Изменить фамилию</button>
            </div>
            <div class="exit">
                <button class="btn btn-success" type="button" onclick="window.location.href='/index.php'">Выход</button>
            </div>
            <div class="prot">
                <script src="./prot/prot.js"></script>
                <p align="center">Последние действия</p>
                <table id='tab' border="1">
            		<thead>
			<tr>
				<th>id логин</th>
				<th>Что сделал</th>
				<th>Когда</th>
			</tr>
		</thead>
            <tbody id='stud'>
		</tbody>
	</table>
            </div>
            <div class="delteach">
                <p align="center">Удалить преподователя</p>
            <p id="delt" align="center"></p>
            <script src="./del/teach/teach.js"></script> 
                <input type="text" class="input" id="id_tt" placeholder="id преподователя">
                <button id="delte" class="btn btn-success" type="button">Удалить</button>
            </div>
             <div class="delstud">
                <p align="center">Удалить студента</p>
            <p id="dels" align="center"></p>
            <script src="./del/stud/stud.js"></script> 
                <input type="text" class="input" id="id_ss" placeholder="id студента">
                <button id="delst" class="btn btn-success" type="button">Удалить</button>
            </div>
            <div class="del">
            <script src="./del/del.js"></script> 
                <button id="del" class="btn btn-success" type="button">Удалить все</button>
            </div>
</body>
</html>
