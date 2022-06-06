<!docktype html> 
<html>
<head>   
    <meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>  
<title>Подробнее о студенте</title>
</head>
<body>
    <style type="text/css">
    body{    background-image: url("/b22.png");}
    .tabl
    {
        position: absolute;
        left: 1%;
        top: 3%;
    }
    .btn-success {
        display: block;
        margin-top: 10px;
    }
            </style>
	<script src="./detail.js"></script>
        <div class="tabl">
	<table id='table' border="1">
		<thead>
			<tr>
				<th>id</th>
				<th>Фамилия</th>
				<th>Имя</th>
				<th>Отчество</th>
                                <th>Дата рождения</th>
                                <th>Адрес регистрации </th>
                                <th>Адрес фактического проживания </th>
                                <th>Контактный номер телефона </th>
                                <th>СНИЛС </th>
                                <th>Мед.полис </th>
                                <th>Паспортные данные </th>
                                <th>Средний балл аттестата </th>
                                <th>ФИО матери </th>
                                <th>Место работы </th>
                                <th>Контактный телефон </th>
                                <th>ФИО отца </th>
                                <th>Место работы </th>
                                <th>Контактный телефон </th>
                                <th>семья </th>
                                <th>Количество детей в семье </th>
                                <th>Есть паспорт подтверждающий статус многодетной семьи? </th>
                                <th>Учет в КДН </th>
                                <th>Хронические заболевания </th>
                                <th>Инвалидность </th>
			</tr>
		</thead>
		<tbody id='deta'>
		</tbody>
	</table>
        <button id="upd" class="btn btn-success">Изменить</button>
        <button id="exit" class="btn btn-success" >Назад</button> 
            </div>
            <script src="/exit.js"></script>
            
</body>
</html>