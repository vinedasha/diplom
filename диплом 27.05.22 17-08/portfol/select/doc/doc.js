function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
        
        function main()
{
	var btn = document.getElementById('sel');
	btn.addEventListener('click',sel,false);
}

window.addEventListener('load', main, false);

function sel()
{
        var id_s = parseGetParams().id_stud;
        var name = document.getElementById('myimage').files[0].name;
        const doc = document.getElementById('myimage').value;
        var re = request('./doc/getdoc.php?id_s='+id_s + '&' + 'name='+name+ '&' + 'myimage='+ doc);
        window.open("http://portfol/doc/doc.php?id_stud="+id_s, "_self");

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
