<!docktype html> 
<html>
<head>
    	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<title>registration</title>
</head>
<body>
<style type="text/css">
        .col
        {
            width: 1500px;
            height: 1000px;
            position: fixed;
           background-image: url("/b2.png");
        }
        .co
        {
            width: 300px;
            height: 1000px;
            position: fixed;
            left: 20%;
            top: 6%;
        }
        .par
        {
            width: 300px;
            height: 1150px;
            position: absolute;
            left: 40%;
            top: 15%;
        }
        .fam
        {
            width: 300px;
            height: 1150px;
            position: absolute;
            left: 60%;
            top: 10%;
        }
        .input {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        }
        .btn-success {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        width: 200px;
        }
        </style>
        
    <div class="col">
        <h2  align="center">Заполните все поля</h2>
        <p id="not" align="center"></p>
        <script src="./stud/stud.js"></script>
        <div class="co">
        <p align="center">О себе</p>
	<input type="text" placeholder="Фамилия" class="input" id="su">
        <p></p>
	<input type="text" placeholder="Имя" class="input" id="na">
        <p></p>
	<input type="text" placeholder="Отчество" class="input" id="pa">
        <p></p>
        <input type="date" class="input" id="bir">
        <p></p>
        <input type="text" placeholder="Адрес регестрации" class="input" id="ar">
        <p></p>
        <input type="text" placeholder="Адрес фактический" class="input" id="af">
        <p></p>
        <input type="text" placeholder="Номер телефона" class="input" id="numbers">
        <p></p>
        <input type="text" placeholder="Снил" class="input" id="sn">
        <p></p>
        <input type="text" placeholder="Мед. полис" class="input" id="mp">
        <p></p>
        <input type="text" placeholder="Паспорт" class="input" id="pasp">
        <p></p>
        <input type="text" placeholder="Средний балл" class="input"id="ass">
        </div>
        <div class="par">
        <p align="center">О родителях</p>
        <input type="text" placeholder="ФИО мамы" class="input" id="fiom">
        <p></p>
        <input type="text" placeholder="Работа мамы" class="input" id="wm">
        <p></p>
        <input type="text" placeholder="Номер мамы" class="input" id="nm">
        <p></p>
        <input type="text" placeholder="ФИО папы" class="input" id="fiof">
        <p></p>
        <input type="text" placeholder="Работа папы" class="input" id="wf">
        <p></p>
        <input type="text" placeholder="Номер папы" class="input" id="nf">
        </div>
        <div class="fam">
        <p align="center">О семье</p>
        <input type="text" placeholder="Семья полная/не полная" class="input" id="fam">
        <p></p>
        <input type="text" placeholder="Количесво детей в семье" class="input" id="nc">
        <p></p>
        <p align="center">да/нет</p>
        <input type="text" placeholder="Паспорт многодетной семьи?" class="input" id="cp">
        <p></p>
        <input type="text" placeholder="Учет в КДН" class="input" id="acKDN">
        <p></p>
        <input type="text" placeholder="Хронические заболевания" class="input" id="chrdis">
        <p></p>
        <input type="text" placeholder="Инвалидность" class="input" id="dis">
        <p></p>
        <button id="se" class="btn btn-success">Добавить</button> 
        <button id="exit" class="btn btn-success">Назад</button> 
        </div>
        </div>
        <script src="/exit.js"></script>
</body>
</html>
