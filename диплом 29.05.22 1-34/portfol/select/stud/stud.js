
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
}

window.addEventListener('load', main, false);

function sel()
{
        var id_t = parseGetParams().id_teach;
	let input = document.getElementById('su');
	let input1 = document.getElementById('na');
	let input2 = document.getElementById('pa');
        let input3 = document.getElementById('bir');
        let input4 = document.getElementById('ar');
        let input5 = document.getElementById('af');
        let input6 = document.getElementById('numbers');
        let input7 = document.getElementById('sn');
        let input8 = document.getElementById('mp');
        let input9 = document.getElementById('pasp');
        let input10 = document.getElementById('ass');
        let input11 = document.getElementById('fiom');
        let input12 = document.getElementById('wm');
        let input13 = document.getElementById('nm');
        let input14 = document.getElementById('fiof');
        let input15 = document.getElementById('wf');
        let input16 = document.getElementById('nf');
        let input17 = document.getElementById('fam');
        let input18 = document.getElementById('nc');
        let input19 = document.getElementById('cp');
        let input20 = document.getElementById('acKDN');
        let input21 = document.getElementById('chrdis');
        let input22 = document.getElementById('dis');
         
         
         
	var re = request('./stud/constud.php?id_teachs='+id_t + '&' + 'su='+input.value + '&' + 'na='+input1.value + '&' + 'pa='+input2.value + '&' + 'bir='+input3.value + '&' + 'ar='+input4.value + '&' + 'af='+input5.value + '&' + 'numbers='+input6.value + '&' + 'sn='+input7.value + '&' + 'mp='+input8.value + '&' + 'pasp='+input9.value + '&' + 'ass='+input10.value + '&' + 'fiom='+input11.value + '&' + 'wm='+input12.value + '&' + 'nm='+input13.value + '&' + 'fiof='+input14.value + '&' + 'wf='+input15.value + '&' + 'nf='+input16.value + '&' + 'fam='+input17.value + '&' + 'nc='+input18.value + '&' + 'cp='+input19.value + '&' + 'acKDN='+input20.value + '&' + 'chrdis='+input21.value + '&' + 'dis='+input22.value);

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

