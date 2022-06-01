function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}

function doc()
{
    //передали в бд имя загруж файла
    var id_s = parseGetParams().id_stud;
     var d = document.getElementById('myimage');
     var name = d.files[0].name;
     var files = d.files[0];
     var re = request('./getdoc.php?id_s='+id_s + '&' + 'name='+name);
     //
     xhr=new XMLHttpRequest(),
     form=new FormData();
 
d.onchange=function()
{
    form.append("fils",files);
    form.getAll("fils");
    xhr.open("post",'./in.php',true);
    xhr.send(form); 
}
}

function main()
{
	var btn = document.getElementById('sel');
	btn.addEventListener('click',doc,false);
        var btn = document.getElementById('exit');
	btn.addEventListener('click',exitd,false);
}

window.addEventListener('load', main, false);

function exitd()
{
    let id_t = parseGetParams().id_teach;
    window.open("http://portfol/portfolio/port.php?teach_id="+id_t, "_self");
}

/*function namdoc()
{
        let id = parseGetParams().id_stud;
	
     //    pm.textContent = '';
         let pm = document.getElementById('name');
	let res = request('./documents.php?id_stud='+id);
        
        let nam = JSON.parse(res);
        let limit = nam.length;
        let re = request('./limit.php?id_stud='+id + '&limit='+limit);
        let name = JSON.parse(re);
		for (let i = 0; i < name.length; i++)
		{
                    var imageArray = [
					"img/kkkk.jpg",
                                        "img/lllll.jpg"
				];
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
				//Функция для показа стрелочек
				function btn_show(){
					if(number != 0) document.getElementById('left').style.display='block';
					if(number != imageCount - 1) document.getElementById('right').style.display='block';
				}				
				//Функция, которая прекращает показ стрелочек
				function btn_noshow(){
					document.getElementById('left').style.display='none';
					document.getElementById('right').style.display='none';
				}
				//Выводим картинки
				document.write('<img id="images" class="img" src="' + imageArray[0] + '">');
	
}
window.addEventListener('load', namdoc, false)*/

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 


