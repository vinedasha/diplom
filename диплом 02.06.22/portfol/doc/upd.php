<?php
$id = $_GET['id'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );
$q="delete from stud.doc where id_doc = '$id';";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());

