function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('updatsuatud');
	btn.addEventListener('click',su,false);
        var bt = document.getElementById('updatafstud');
	bt.addEventListener('click',af,false);
        var b = document.getElementById('exit');
	b.addEventListener('click',exit,false);
        var bn = document.getElementById('updatarstud');
	bn.addEventListener('click',ar,false);
        var br = document.getElementById('updatnumstud');
	br.addEventListener('click',num,false);
}

window.addEventListener('load', main, false);

function su()
{
        let pl = document.getElementById('sust');
        pl.textContent = '';
	var id_s = parseGetParams().id_stud;
	let su = document.getElementById('sus');
        if (id_s == "" || su.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
                let res = request('./su.php?id_s='+id_s + '&' + 'su='+su.value);
                 
                          let id_t = parseGetParams().teach_id;
                         window.open("http://portfol/detail/detail.php?id_taech="+id_t + '&id_stud='+id_s, "_self");
        }
        
}

function af()
{
        let pl = document.getElementById('sust');
        pl.textContent = '';
	var id_s = parseGetParams().id_stud;
	let af = document.getElementById('afs');
        if (id_s == "" || af.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
           let res = request('./af.php?id_s='+ id_s + '&' + 'af='+af.value);

               let id_t = parseGetParams().teach_id;
               window.open("http://portfol/detail/detail.php?id_teach="+id_t + '&id_stud='+id_s, "_self");
        }
}

function ar()
{
        let pl = document.getElementById('sust');
        pl.textContent = '';
	var id_s = parseGetParams().id_stud;
	let ar = document.getElementById('ars');
        if (id_s == "" || ar.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
           let res = request('./ar.php?id_s='+ id_s + '&' + 'ar='+ar.value);

               let id_t = parseGetParams().teach_id;
               window.open("http://portfol/detail/detail.php?id_teach="+id_t + '&id_stud='+id_s, "_self");
        }
}

function num()
{
        let pl = document.getElementById('sust');
        pl.textContent = '';
	var id_s = parseGetParams().id_stud;
	let num = parseInt((document.getElementById('nums').value).replace(/\D+/g,''));
        if (id_s == "" || num == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
           let res = request('./num.php?id_s='+ id_s + '&' + 'num='+num);

               let id_t = parseGetParams().teach_id;
               window.open("http://portfol/detail/detail.php?id_teach="+id_t + '&id_stud='+id_s, "_self");
        }
}

function exit()
{
               let id_s = parseGetParams().id_stud;
               let id_t = parseGetParams().teach_id;
               window.open("http://portfol/detail/detail.php?id_teach="+id_t + '&id_stud='+id_s, "_self");
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