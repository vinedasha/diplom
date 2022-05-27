function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
window.addEventListener('load', main, false);

function main()
{
	var btn = document.getElementById('det');
	btn.addEventListener('click',checkdet,false);
        var bt = document.getElementById('doc');
	bt.addEventListener('click',checkdoc,false);
        var b = document.getElementById('achi');
	b.addEventListener('click',checkachi,false);
        var bn = document.getElementById('sel');
	bn.addEventListener('click',id_t,false);
}

function checkdet()
{
    let id_t = parseGetParams().teach_id;
    let id_s = document.getElementById('id_stud');
    let pl = document.getElementById('notstud');
    
    document.getElementById('notstud').textContent = '';
   
    let res = parseInt((request('http://portfol/portfolio/id_s.php?id_stud='+id_s.value)).replace(/\D+/g,''));
    var t = res.toString();
    var id = parseInt(t, 10);
    if (id != id_t)
    {               
            var text = document.createTextNode('Вы хотите посмотреть подробности не своего студента');
            pl.appendChild(text);
    }
       else  if (res != null && res.length != 0 && id == id_t)
	{	
                window.open("http://portfol/detail/detail.php?id_stud="+id_s.value+'&id_teach='+id_t, "_self");
	}
}

function checkdoc()
{
    let id_t = parseGetParams().teach_id;
    let id_s = document.getElementById('id_stud');
    let pl = document.getElementById('notstud');
    
    document.getElementById('notstud').textContent = '';
   
    let res = parseInt((request('http://portfol/portfolio/id_s.php?id_stud='+id_s.value)).replace(/\D+/g,''));
    var t = res.toString();
    var id = parseInt(t, 10);
    if (id != id_t)
    {               
            var text = document.createTextNode('Вы хотите посмотреть документы не своего студента');
            pl.appendChild(text);
    }
       else  if (res != null && res.length != 0 && id == id_t)
	{	
                window.open("http://portfol/doc/doc.php?id_stud="+id_s.value+'&id_teach='+id_t, "_self");
	}
}

function checkachi()
{
    let id_t = parseGetParams().teach_id;
    let id_s = document.getElementById('id_stud');
    let pl = document.getElementById('notstud');
    
    document.getElementById('notstud').textContent = '';
   
    let res = parseInt((request('http://portfol/portfolio/id_s.php?id_stud='+id_s.value)).replace(/\D+/g,''));
    var t = res.toString();
    var id = parseInt(t, 10);
    if (id != id_t)
    {               
            var text = document.createTextNode('Вы хотите посмотреть достижения не своего студента');
            pl.appendChild(text);
    }
       else  if (res != null && res.length != 0 && id == id_t)
	{	
                window.open("http://portfol/achi/achi.php?id_stud="+id_s.value+'&id_teach='+id_t, "_self");
	}
}

function id_t()
{
    let id_t = parseGetParams().teach_id;
    window.open("http://portfol/select/stud.php?id_teach="+id_t, "_self");
    
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

