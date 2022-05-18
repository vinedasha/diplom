<?php

$link=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );

if(isset($_POST['submit']))
{
 $query = pg_query($link,"SELECT id_login, password FROM atr.login WHERE login='".pg_real_escape_string($link,$_POST['login'])."' LIMIT 1");
    $data = pg_fetch_assoc($query);
     if($data['user_password'] === md5(md5($_POST['password'])))
     {
         eader("Location: check.php"); exit();
     }
}
 else 
 {
     print "Вы ввели неправильный логин/пароль";
 }
?>
<form method="POST">
Логин <input name="login" type="text" required><br>
Пароль <input name="password" type="password" required><br>
<input name="submit" type="submit" value="Войти">
</form>