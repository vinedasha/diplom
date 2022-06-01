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
     var re = request('./achiget.php?id_s='+id_s + '&' + 'name='+name);
     //
     xhr=new XMLHttpRequest(),
     form=new FormData();
 
d.onchange=function()
{
    //var upload_file=d.files[0];
    form.append("fils",files);
    form.getAll("fils");
    xhr.open("post",'./img/in.php',true);
    xhr.send(form); 
  //  xhr.abort();
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
	

	let res = request('documents.php?id_stud='+id);
        
        let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			var text = document.createTextNode(name[i].name);
		}
	
}
window.addEventListener('load', do_stuff, false)*/

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 


