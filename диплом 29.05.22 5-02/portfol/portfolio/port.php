<!docktype html> 
<html>
<head>
    <meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>  
<title>Студенты</title>
</head>
<body>
    <style type="text/css">
        .col
        {
            width: 1500px;
            height: 1000px;
            position: fixed;
           background-image: url("/b2.png");
        }
            </style>
    <div class="col">
        <br>
        <p id="teachpp"></p><!-- ФИО преподователя-->
	<input type="text" placeholder="Введите id студента" id="id_stud"> <p></p>
        <p id="notstud"></p> <!-- если не тот студент-->
Выберите нужную кнопку с действием
<p></p>
<button id="doc" class="btn btn-success">Документы</button>
<button id="achi" class="btn btn-success">Достижения</button>
<button id="det"  class="btn btn-success">Подробнее о студенте</button>
<button id="sel"  class="btn btn-success">Добавить студента</button>
<button id="exit" onclick="window.location.href='/index.php'" class="btn btn-success">Выход</button>
       <p></p>
       <table id='tab' border="1">
            		<thead>
			<tr>
				<th>id</th>
				<th>Фамилия</th>
				<th>Имя</th>
				<th>Отчество</th>
			</tr>
		</thead>
            <tbody id='stud'>
		</tbody>
	</table>
    </div> 
         <script src="./teach.js"></script>
         <script src="./stud.js"></script>
         <script src="./check.js"></script>
</body>
</html>