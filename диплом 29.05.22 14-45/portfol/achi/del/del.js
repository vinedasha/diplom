function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('del');
	btn.addEventListener('click',del,false);
}

window.addEventListener('load', main, false);

function del()
{
         let id_t = parseGetParams().id_teach;
         let id_s = parseGetParams().id_stud;
        let pl = document.getElementById('notid');
        pl.textContent = '';
	let id_d = document.getElementById('id_doc');
        if (id_d.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
            let res = request('./del/del.php?id_d='+id_d.value);
            if (res.length == 974 || res.length == 975 || res.length == 976)
            {               
                 var text = document.createTextNode('id достижения не правильный. Проверьте!');
                 pl.appendChild(text);
            }
            else
            {
                 window.open("http://portfol/achi/achi.php?id_stud="+id_s +'&id_teach='+id_t,"_self");
            }
        }
}

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 


