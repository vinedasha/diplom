<?php

function get_News() 
{ 
 $con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );
 $sql = "SELECT * FROM func.selectstud(2)"; 
 
 $result = pg_query($con, $sql); 
 
 $News = pg_fetch_all($result, PGSQL_ASSOC); 
 
 return $News; 
} 
 
function get_news_by_id($student_id) 
{  
 $con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" );
 
 $sql = "SELECT * FROM stud.portfol WHERE id_stud = ".$student_id; 
 
 $result = pg_query($con, $sql); 
 
 $Novost = pg_fetch_assoc($result); 
 
 return $Novost; 
}