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
    body{   
        background-image: url("/b22.png");
    }
    .updatesuteach {
            width: 290px;
            height: 200px;
            position: absolute;
            left: 10%;
            top: 10%;
        }
            .udatepass {
            width: 290px;
            height: 200px;
            position: absolute;
            left: 40%;
            top: 10%;
        }
        .updatech {
            width: 200px;
            height: 140px;
            position: absolute;
            left: 70%;
            top: 10%;
        }
        .prot {
            width: 500px;
            height: 400px;
            position: absolute;
            left: 2%;
            top: 95%;
        }
        .delstud {
            width: 200px;
            height: 140px;
            position: absolute;
            left: 14%;
            top: 50%;
        }
        .delteach {
            width: 200px;
            height: 140px;
            position: absolute;
            left: 45%;
            top: 50%;
        }
        
        .del {
            width: 150px;
            height: 70px;
            position: absolute;
            left: 72%;
            top: 52%;
        }
        .exit{
            width: 50px;
            height: 50px;
            position: absolute;
            left: 75%;
            top: 62%;
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
            <div class="updatech">
                <p align="center">Поменять преподователя</p>
            <p id="updt" align="center"></p>
            <script src="./updteach/steach.js"></script> 
                <input type="text" class="input" id="id_sss" placeholder="id студента">
                <input type="text" class="input" id="id_sst" placeholder="id другого преподователя">
                <button id="updtechst" class="btn btn-success" type="button">Поменять</button>
            </div>
            <div class="del">
            <script src="./del/del.js"></script> 
                <button id="del" class="btn btn-success" type="button">Удалить все</button>
            </div>
            
</body>
</html>
