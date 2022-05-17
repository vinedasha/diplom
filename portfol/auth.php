<!docktype html> 
<html>
    <head>
    <meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<title>Неверная авторизация</title>
</head>
    <body>
        <style>	body { background-color:#5d76cb; }</style>
        <br>  <button onclick="window.location.href='/index.php'" class="btn btn-success">Назад</button> 
    </body>
</html>
<?php 

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);



$pgsql = pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );


$result = pg_query($pgsql, "SELECT * FROM atr.login WHERE login = '$login' AND password = '$pass'");
$user = pg_fetch_assoc($result); // Конвертируем в массив

if(count($user) == 1)
{
	echo "Логин или пароль введены неверно";
	exit();
}
pg_close($pgsql);
header('Location: ./portfolio/port.php');
 ?>

