<!DOCTYPE html>

<html lang="ru">
    <head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<title>Вход</title>
</head>
<body>
    <style type="text/css">
        body{    background-image: url("/b2.png");}
        .updatesuportfol {
            width: 290px;
            height: 200px;
            position: fixed;
            left: 2%;
            top: 15%;
        }
        .updateafportfol{
            width: 350px;
            height: 200px;
            position: fixed;
            left: 23%;
            top: 11%;
        }
        .updatearportfol{
            width: 350px;
            height: 200px;
            position: fixed;
            left: 47%;
            top: 15%;
        }
        .updatenumportfol{
            width: 350px;
            height: 200px;
            position: fixed;
            left: 70%;
            top: 15%;
        }
        .exit{
            width: 350px;
            height: 200px;
            position: fixed;
            left: 35%;
            top: 50%;
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
            <div class="updatesuportfol">
                <p align="center">Изменить фамилию студенту</p>
                <p id="sust" align="center"></p>
                <script src="./stud.js"></script> 
                <input type="text" class="input" id="sus" placeholder="Новая фамилия">
                <button id="updatsuatud" class="btn btn-success" type="button">Изменить фамилию</button>
            </div>
            <div class="updateafportfol">
                <p align="center">Изменить адрес фактического проживания студенту</p>
                <p id="afst" align="center"></p>
                <input type="text" class="input" id="afs" placeholder="Новый адрес">
                <button id="updatafstud" class="btn btn-success" type="button">Изменить адрес</button>
            </div>
           <div class="updatearportfol">
                <p align="center">Изменить адрес регестрации студенту</p>
                <p id="arst" align="center"></p>
                <input type="text" class="input" id="ars" placeholder="Новый адрес">
                <button id="updatarstud" class="btn btn-success" type="button">Изменить адрес</button>
            </div>
            <div class="updatenumportfol">
                <p align="center">Изменить телефонный номер студенту</p>
                <p id="numst" align="center"></p>
                <input type="text" class="input" id="nums" placeholder="Новый номер">
                <button id="updatnumstud" class="btn btn-success" type="button">Изменить номер</button>
            </div>
            <dib class="exit">
                <button id="exit" class="btn btn-success" type="button">Назад</button>
            </dib>