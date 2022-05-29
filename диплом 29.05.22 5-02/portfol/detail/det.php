<?php
$param1 = $_GET['id_stud'];
$con=pg_connect("host=127.0.0.1 port=5432 dbname=diplom user=postgres password=password" )
or die ("could not connect");
$q="select * from func.selectstudent('$param1'::int);";
$res=pg_query($con,$q);
//print_r($q);
//die();
if(pg_num_rows($res))
{
	$data=array();
	while($row=pg_fetch_array($res))
	{
		$data[] = ['id_stud'=>$row['id_stud'], 
		'surname'=>$row['surname'], 
		'name'=>$row['name'], 
		'patronymic'=>$row['patronymic'],
                'birthday'=>$row['birthday'], 
                    'address_reg'=>$row['address_reg'], 
                    'address_fact'=>$row['address_fact'], 
                    'number'=>$row['number'], 
                    'snils'=>$row['snils'], 
                    'med_pol'=>$row['med_pol'], 
                    'passport'=>$row['passport'], 
                    'average_score'=>$row['average_score'], 
                    'fio_m'=>$row['fio_m'], 
                    'work_m'=>$row['work_m'], 
                    'number_m'=>$row['number_m'], 
                    'fio_f'=>$row['fio_f'], 
                    'work_f'=>$row['work_f'], 
                    'number_f'=>$row['number_f'], 
                    'family'=>$row['family'], 
                    'num_child'=>$row['num_child'], 
                    'child_pass'=>$row['child_pass'], 
                    'acc_kdn'=>$row['acc_kdn'], 
                    'chr_dis'=>$row['chr_dis'], 
                    'disab'=>$row['disab']];
	}
	header('Content-Type: application/json; charset=utf-8');
//$data = array_slice($data, 0, 0);
	$data = str_replace("\\","",$data);
        
	$j = json_encode($data);
echo($j);
}