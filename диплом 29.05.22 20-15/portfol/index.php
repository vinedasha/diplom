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
        .col
        {
            width: 1500px;
            height: 1000px;
            position: fixed;
           background-image: url("b2.png");
        }
        .co
        {
            width: 400px;
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
        }

    </style>
	<div class="col">
            <div class="co">
		<h1>Форма авторизации</h1>
                <p  id="logpass" align="center"></p>
                               <br>
				<input type="text" class="input" name="login"  id="login" placeholder="Логин">
                               <p></p>
				<input type="password" class="input" name="pass"  id="pass" placeholder="Пароль">
                               <p></p>
				<button id="id" class="btn btn-success" >Авторизоваться</button>  
                    <p></p>  <button id="registr" onclick="window.location.href='./reg/reg.php'" class="btn btn-success" type="button">Зарегистрироваться</button>
            </div>
        </div>
      <script src="index.js"></script>  
</body>
</html>