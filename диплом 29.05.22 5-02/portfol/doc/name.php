<?php
$param1 = $_GET['id_doc'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q1 = "select name from stud.doc where id_doc = '$param1';";
$re = pg_query($con,$q1);
if(pg_num_rows($re))
{
	$datas=array();
	while($rows=pg_fetch_array($re))
	{
        $datas[] = ['name'=>$rows['name']];
	}
	header('Content-Type: application/json; charset=utf-8');
//$data = array_slice($data, 0, 0);
	$datas = str_replace("\\","",$datas);
        
	$o = json_encode($datas);
echo($o);
}
