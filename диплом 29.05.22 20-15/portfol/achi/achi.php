<!docktype html> 
<html>
<head>
<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<title>Достижения студента</title>
</head>
<body>
        <style type="text/css">
    body{    background-image: url("/b2.png");}
            .co
        {
            position: fixed;
            left: 2%;
            top: 5%;
        }
            </style>
	<script src="./achi.js"></script>
        <script src="./dowachi.js"></script>
        <div class="co">
        <input type="text"  placeholder="Введите id документа" id="id_doc"> <p id="notid"></p>
        <button id="dow" class="btn btn-success">Путь к документу</button> 
        <script src="./del/delall.js"></script>
        <button id="delall" class="btn btn-success">Удалить достижения все</button> 
        <script src="./del/del.js"></script>
        <button id="del" class="btn btn-success">Удалить достижения</button> 
        <p id="path"></p>
	<table id='table' border="1">
		<thead>
			<tr>
				<th>id</th>
				<th>Имя</th>
			</tr>
		</thead>
		<tbody id='doc'>
		</tbody>
	</table>
            <br>
        <button id="sel" class="btn btn-success" >Добавить достижение</button>  
        <button id="exit" class="btn btn-success" >Назад</button>  
        </div>
         <script src="id_st.js"></script>
         <script src="/exit.js"></script>
</body>
</html>