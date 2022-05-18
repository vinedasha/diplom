<?php

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

$pgsql = pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );

$id_login = pg_query($pgsql, "SELECT id_login FROM atr.login WHERE login = '$login' AND password = '$pass'");

echo($id_login);
