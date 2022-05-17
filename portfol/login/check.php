<?php
// Скрипт проверки

// Соединямся с БД
$link=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );

if (isset($_COOKIE['id']))
{
    $query = pg_query($link, "SELECT id_login FROM atr.login  WHERE id_login = '".intval($_COOKIE['id'])."' LIMIT 1");
    $userdata = pg_fetch_assoc($query);
	
}
?>
<meta http-equiv = "Refresh" CONTENT="0; URL = ./portfolio/port.php">

