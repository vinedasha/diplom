<?php
$param1 = $_GET['id_s'];
$param2 = $_GET['num'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="call func.updateportfolnum('$param1'::int, '$param2'::DECIMAL);";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());


