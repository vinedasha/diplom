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
        var pl = document.getElementById('doc');
        pl.textContent = '';
        var id_s = parseGetParams().id_stud;
        var d = document.getElementById('myimage');
        if(d.value == "")
        {
            var text = document.createTextNode('Вы не выбрали файл');
            pl.appendChild(text);
        }
        else
        {
        var name = d.files[0].name;
        const doc = d.value;
        var re = request('./achi/achi.php?id_s='+id_s + '&' + 'name='+name+ '&' + 'myimage='+ doc);
        window.open("http://portfol/achi/achi.php?id_stud="+id_s, "_self");
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
