<?php
$param1 = $_GET['id_stud'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="select id_teach from stud.con where id_stud =('$param1'::int);";
$res=pg_query($con,$q);

if(pg_num_rows($res))
{
	$data=array();
	while($row=pg_fetch_array($res))
	{ 
	$data[] = ['id_teach'=>$row['id_teach']];
	}	
	header('Content-Type: application/json; charset=utf-8');
	$data = str_replace("\\","",$data);
	$j = json_encode($data);
	echo($j);
}
