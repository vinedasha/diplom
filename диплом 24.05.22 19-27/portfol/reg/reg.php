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
            width: 1290px;
            height: 1000px;
            position: fixed;
           background-image: url("/b2.png");
        }
        .co
        {
            width: 300px;
            height: 300px;
            position: fixed;
            left: 35%;
            top: 5%;
        }
        .input {
        display: block;
        margin-left: auto;
        margin-right: auto;
        }
        .btn-success {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        }
        </style>
    <div class="col">
        <div class="co">
       
       <h2>Заполните все поля</h2>
	<input type="text" placeholder="Логин" class="input">
        <p></p>
	<input type="text" placeholder="Пароль" class="input">
        <p></p>
	<input type="text" placeholder="Фамилия" class="input">
        <p></p>
	<input type="text" placeholder="Имя" class="input">
        <p></p>
	<input type="text" placeholder="Отчество" class="input">
        <p></p>
        <button id="select" class="btn btn-success">Зарегистрироваться</button> 
        <button onclick="window.location.href='/index.php'" class="btn btn-success">Назад</button> 
        </div>
        </div>
        <script src="log.js"> </script>
</body>
</html>
