<?php
$param1 = $_GET['login'];
$param2 = $_GET['passwd'];
$host="127.0.0.1";
$user="postgres";
$pass="password";
$db="diplom";
$con=pg_connect("host=$host dbname=$db user=$user password=$pass")
or die ("could not connect");
$q="SELECT id_login FROM atr.login WHERE login = '$param1' AND password = '$param2'";
$res=pg_query($con,$q);

if(pg_num_rows($res))
{
	$data=array();
	while($row=pg_fetch_array($res))
	{
            
	$data[] = ['id_login'=>$row['id_login']];
        
	}	
	header('Content-Type: application/json; charset=utf-8');
	$data = str_replace("\\","",$data);
	$j = json_encode($data);
	echo($j);
}

