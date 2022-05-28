<!DOCTYPE html>

<html lang="ru">
    <head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<title>Добавить документ</title>
</head>
<body>
    <style type="text/css">
    body{    background-image: url("/b2.png");}
    .col
    {
            width: 400px;
            height: 300px;
            position: fixed;
            left: 2%;
            top: 7%;
        }
            </style>
            <div class="col">
				<input type="file" name="myimage" id="myimage">
                                <p></p>
                                <button id="sel" class="btn btn-success" >Добавить</button> 
                                <script src="./doc/doc.js"> </script>
            </div>
</body>
</html>