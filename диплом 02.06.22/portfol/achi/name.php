<?php
$id_s = $_GET['ids'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );
$q="select name from stud.achi where id_stud ='$id_s'::int ORDER BY id_doc DESC LIMIT 1;";
$res=pg_query($con,$q) or die('Ошибка запроса: ' . pg_last_error());

if(pg_num_rows($res))
{
	$data=array();
	while($row=pg_fetch_array($res))
	{
		$data[] = ['name'=>$row['name']];
	}
	header('Content-Type: application/json; charset=utf-8');
//$data = array_slice($data, 0, 0);
	$data = str_replace("\\","",$data);
        
	$j = json_encode($data);
echo($j);
}