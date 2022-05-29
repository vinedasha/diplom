<?php
$param1 = $_GET['id_stud'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="select * from func.selectdoc('$param1'::int);";
$res=pg_query($con,$q);
//print_r($q);
//die();
if(pg_num_rows($res))
{
	$data=array();
	while($row=pg_fetch_array($res))
	{
		$data[] = ['id'=>$row['id'], 
		'name'=>$row['name']];
	}
	header('Content-Type: application/json; charset=utf-8');
//$data = array_slice($data, 0, 0);
	$data = str_replace("\\","",$data);
        
	$j = json_encode($data);
echo($j);
}
