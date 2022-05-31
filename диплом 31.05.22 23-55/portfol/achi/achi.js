function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function do_stuff()
{
        let id = parseGetParams().id_stud;
	let blk = document.getElementById('doc');
	let table = document.getElementById('table');
	table.style.display = "table";

	let res = request('achicont.php?id_stud='+id);
	
	if(res != null && res.length != 0)
	{
		blk.innerHTML = "";
	
		let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			let tr = document.createElement('tr');


			let td1 = document.createElement('td');
			td1.append(name[i].name);
			tr.appendChild(td1);

			blk.appendChild(tr);
		}
	}
	else
		blk.innerHTML = '<span class="note">Нет достижений</span>';
}

window.addEventListener('load', do_stuff, false)

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 


