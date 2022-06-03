<?php
$param1 = $_GET['id_teachs']; $param2 = $_GET['su']; $param3 = $_GET['na'];
$param4 = $_GET['pa']; $param5 = $_GET['bir']; $param6 = $_GET['ar'];
$param7 = $_GET['af']; $param8 = $_GET['numbers']; $param9 = $_GET['sn'];
$param10 = $_GET['mp']; $param11 = $_GET['pasp']; $param12 = $_GET['ass'];
$param13 = $_GET['fiom']; $param14 = $_GET['wm']; $param15 = $_GET['nm'];
$param16 = $_GET['fiof']; $param17 = $_GET['wf']; $param18 = $_GET['nf'];
$param19 = $_GET['fam']; $param20 = $_GET['nc']; $param21 = $_GET['cp'];
$param22 = $_GET['acKDN']; $param23 = $_GET['chrdis']; $param24 = $_GET['dis'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="call func.creastud('$param1'::int, '$param2'::varchar, '$param3'::varchar, '$param4'::varchar,
        '$param5'::date, '$param6'::varchar, '$param7'::varchar, '$param8'::DECIMAL, '$param9'::int,
        '$param10'::int,'$param11'::varchar, '$param12'::float, '$param13'::varchar, '$param14'::varchar,
        '$param15'::DECIMAL, '$param16'::varchar, '$param17'::varchar, '$param18'::DECIMAL, '$param19'::varchar,
        '$param20'::int, '$param21'::varchar, '$param22'::varchar, '$param23'::varchar, '$param24'::varchar);";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());

