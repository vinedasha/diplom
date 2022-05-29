<?php
$id_s = $_GET['id_s'];
$name = $_GET['name'];
$file = $_GET['myimage'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );
$q="call func.addachi('$id_s'::int, '$name'::varchar, '$file'::text);";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());
 