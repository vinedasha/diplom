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
	btn.addEventListener('click',doc,false);
        var bt = document.getElementById('exit');
	bt.addEventListener('click',exitd,false);
        var b = document.getElementById('upd');
	b.addEventListener('click',upd,false);
        var bn = document.getElementById('delall');
	bn.addEventListener('click',delall,false);
        var bnt = document.getElementById('del');
	bnt.addEventListener('click',deld,false);
}

window.addEventListener('load', main, false);

function doc()
{
    //передали в бд имя загруж файла
    let pl = document.getElementById('name');
    pl.textContent = '';
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
            var text = document.createTextNode('Файл был добавлен в базу');
            pl.appendChild(text);
}

function exitd()
{
    let id_t = parseGetParams().id_teach;
    window.open("http://portfol/portfolio/port.php?teach_id="+id_t, "_self");
}

function upd()
{
    var id_s = parseGetParams().id_stud;
    let res = request('./id.php?ids='+id_s);
    let name = JSON.parse(res);
    let id = name[0].id_doc;
    let re = request('./upd.php?id='+id);
    window.location.reload();
}

function delall()
{
     let id_s = parseGetParams().id_stud;
	let r = request('documents.php?id_stud='+id_s);
        let name = JSON.parse(r);
		for (let i = 0; i < name.length; i++)
		{
                    let res = request('./delall.php?name='+name[i].name);
		}
     let re = request('./del/delall.php?id_s='+id_s);
     window.location.reload();
}

function deld()
{
    var id_s = parseGetParams().id_stud;
    var n = request('./name.php?ids='+id_s);
    let nam = JSON.parse(n);
    let resm = request('./delall.php?name='+nam[0].name);
    var resi = request('./id.php?ids='+id_s);
    let name = JSON.parse(resi);
    let id = name[0].id_doc;
    let res = request('./del/del.php?id_d='+id);
    window.location.reload();
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


