<?php
$id_s = $_GET['id_s'];
$name = $_GET['name'];
$file = $_FILES['myimage'];

$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );

$q="call func.addoc1('$id_s'::int, '$name'::varchar, '$file'::bytea);";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());
 