<!docktype html> 
<html>
<head>
<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<title>Докуметы студента</title>
</head>
<body>
        <style type="text/css">
    body{    background-image: url("/b2.png");}
            .co
        {
            position: fixed;
            left: 2%;
            top: 73%;
        }
        .myButton {
			box-shadow:inset 0px 1px 0px 0px #54a3f7;
			background-color:#007dc1;
			border-radius:3px;
			border:1px solid #124d77;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			padding:6px 24px;
			text-decoration:none;
			text-shadow:0px 1px 0px #154682;
		}
        .myButton:hover {
			background-color:#0061a7;
		}
		.myButton:active {
			position:relative;
			top:1px;
                }
		.wrapper{
			width: 500px;
			height: 400px;
			margin: 10px auto;
		}
                .img{
                        width: 450px;
			height: 350px;
                }
            </style>
            <div  class="wrapper">
                <script type="text/javascript"> 
                    let id = parseGetParams().id_stud;
	
     //   pm.textContent = '';
        let pm = document.getElementById('name');
	let res = request('documents.php?id_stud='+id);
        
        let nam = JSON.parse(res);
        let limit = nam.length;
        let re = request('limit.php?id_stud='+id + '&limit='+limit);
        let name = JSON.parse(re);
        var imageArray = [];
		for (let i = 0; i < name.length; i++)
		{
                    imageArray[i] = new Image();
                    imageArray[i] = name[i].name;
		//	var text = document.createTextNode(name[i].name + ' ');
                      //  pm.appendChild(text);
		}
                window.number = '0';
				//Привязываем количество картинок к размеру массива
				var imageCount = imageArray.length;		
				function image(num){				
					//Если выбрана следующая картинка
					if(num == 1){
						//Если это последняя картинка, то не увеличиваем счетчик number
						if(number < imageCount - 1){						
							number++;
							document.getElementById('images').src = imageArray[number];
							document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
						}
					}					 
					else{  //Если выбрана предыдущая картинка					
						//Если это первая картинка, то не уменьшаем счетчик number
						if(number > 0){						
							number--;
							document.getElementById('images').src = imageArray[number];
							document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
						}
					}
				}				
				//Выводим картинки
				document.write('<img id="images" class="img" src="' + imageArray[0] + '">');
                                
function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
   }
   function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}

                </script>
            </div>
	<center><p style="font-size: 18px;color: #333;font-weight: bold;" id="num_img"></p></center>
	<center><span class="myButton" onclick="image(0)">&lt;</span> <span class="myButton" onclick="image(1)">&gt;</span></center>
            <div class="co">
                <input type="file" name="myimage" id="myimage">
             <button id="sel" class="btn btn-success" >Добавить</button> 
	<script src="./doc.js"></script>
        <p id="name"></p>
        <button id="exit" class="btn btn-success" >Назад</button>  
        </div>
     <!--    <script src="id_st.js"></script>-->
</body>
</html>
