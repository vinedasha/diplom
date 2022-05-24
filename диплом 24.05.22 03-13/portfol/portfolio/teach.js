function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}

window.addEventListener('load', whoami_teach, false);

function whoami_teach() 
{ 
    
    let id = parseGetParams().teach_id;
    let pp = document.getElementById('teachpp');
    
    let res = request('teach.php?id_login='+id);
	
	if(res !== null && res.length !== 0)
	{
	
		let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			var text = document.createTextNode(name[i].su + ' ' + name[i].pa + ' ' +name[i].na);
                        pp.appendChild(text);
		}
	}
	else
		pp.innerHTML = '<span class="note">FAILED!</span>';
    
} 

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])==="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 