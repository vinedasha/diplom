function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('delall');
	btn.addEventListener('click',delall,false);
}

window.addEventListener('load', main, false);

function delall()
{
         let id_t = parseGetParams().id_teach;
         let id_s = parseGetParams().id_stud;
            let res = request('./del/delall.php?id_s='+id_s);
            window.open("http://portfol/doc/doc.php?id_stud="+id_s +'&id_teach='+id_t,"_self");     
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
