<!DOCTYPE html>

<html lang="ru">
    <head>
     
	<meta charset="utf-8">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	<title>Вход</title>
</head>
<body>
    
	<style>	body { background-color:#5d76cb; }</style>	
	<div class="col">
		<h1>Форма авторизации</h1>
			<form action="auth.php" method="post">
				<input type="text" name="login"  id="login" placeholder="Логин">
                               <p></p>
				<input type="password" name="pass"  id="pass" placeholder="Пароль">
                               <p></p>
				<button id="id" class="btn btn-success">Авторизоваться</button>   
				</form> 
                    <p></p>  <button id="registr" onclick="window.location.href='./reg/reg.php'" class="btn btn-success">Зарегистрироваться</button>
	</div>
      <script src="index.js"></script>  
</body>
</html>