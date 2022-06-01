
function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
        
        function main()
{
	var btn = document.getElementById('se');
	btn.addEventListener('click',sel,false);
        var bt = document.getElementById('exit');
	bt.addEventListener('click',exit,false);
}

window.addEventListener('load', main, false);

function sel()
{
        p = document.getElementById('not');
        p.textContent = '';
        var id_t = parseGetParams().id_teach;
	let input = document.getElementById('su');
	let input1 = document.getElementById('na');
	let input2 = document.getElementById('pa');
        let input3 = document.getElementById('bir');
        let input4 = document.getElementById('ar');
        let input5 = document.getElementById('af');
        let input6 = parseInt((document.getElementById('numbers').value).replace(/\D+/g,''));
        let input7 = parseInt((document.getElementById('sn').value).replace(/\D+/g,''));
        let input8 = parseInt((document.getElementById('mp').value).replace(/\D+/g,''));
        let input9 = document.getElementById('pasp');
        let input10 = document.getElementById('ass');
        let input11 = document.getElementById('fiom');
        let input12 = document.getElementById('wm');
        let input13 = parseInt((document.getElementById('nm').value).replace(/\D+/g,''));;
        let input14 = document.getElementById('fiof');
        let input15 = document.getElementById('wf');
        let input16 = parseInt((document.getElementById('nf').value).replace(/\D+/g,''));;
        let input17 = document.getElementById('fam');
        let input18 = document.getElementById('nc');
        let input19 = document.getElementById('cp');
        let input20 = document.getElementById('acKDN');
        let input21 = document.getElementById('chrdis');
        let input22 = document.getElementById('dis');
         if(input.value == "" || input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "" || input6 == "" || input7 == "" || input8 == "" || input9.value == "" || input10.value == "" || input11.value == "" || input12.value == "" || input13 == "" || input14.value == "" || input15.value == "" || input16 == "" || input17.value == "" || input18.value == "" || input19.value == "" || input20.value == "" || input21.value == "" || input22.value == "")
         {
             var text = document.createTextNode('Вы не запонили какое-то поле. Проверьте!');
            p.appendChild(text);
         }
         else
         {
            var re = request('./stud/constud.php?id_teachs='+id_t + '&' + 'su='+input.value + '&' + 'na='+input1.value + '&' + 'pa='+input2.value + '&' + 'bir='+input3.value + '&' + 'ar='+input4.value + '&' + 'af='+input5.value + '&' + 'numbers='+input6 + '&' + 'sn='+input7 + '&' + 'mp='+input8 + '&' + 'pasp='+input9.value + '&' + 'ass='+input10.value + '&' + 'fiom='+input11.value + '&' + 'wm='+input12.value + '&' + 'nm='+input13 + '&' + 'fiof='+input14.value + '&' + 'wf='+input15.value + '&' + 'nf='+input16 + '&' + 'fam='+input17.value + '&' + 'nc='+input18.value + '&' + 'cp='+input19.value + '&' + 'acKDN='+input20.value + '&' + 'chrdis='+input21.value + '&' + 'dis='+input22.value);
              window.open("http://portfol/portfolio/port.php?teach_id="+id_t, "_self");
     }
          
}

function exit()
{
    let id_t = parseGetParams().id_teach;
    window.open("http://portfol/portfolio/port.php?teach_id="+id_t, "_self");
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

