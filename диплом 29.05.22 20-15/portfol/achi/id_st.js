
window.addEventListener('load', main, false);

function main()
{
	var btn = document.getElementById('sel');
	btn.addEventListener('click',id_s,false);

}

function id_s()
{
    let id_s = parseGetParams().id_stud;
    let id_t = parseGetParams().id_teach;
    window.open("http://portfol/select/achi.php?id_stud="+id_s + '&id_teach='+id_t, "_self");
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


