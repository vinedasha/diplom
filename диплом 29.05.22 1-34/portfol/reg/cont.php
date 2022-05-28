<?php
$param1 = $_GET['logins'];
$param2 = $_GET['passwords'];
$param3 = $_GET['su'];
$param4 = $_GET['na'];
$param5 = $_GET['pa'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="call func.createlogin('$param1'::varchar, '$param2'::varchar, '$param3'::varchar, '$param4'::varchar, '$param5'::varchar);";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());
