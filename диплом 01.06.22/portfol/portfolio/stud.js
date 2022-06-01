function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function do_stuff()
{
	let id = parseGetParams().teach_id;
        let blk = document.getElementById('stud');
        let table = document.getElementById('tab');
        table.style.display = "tab";
	let res = request('stud.php?id_login='+id);
	
	if(res != null && res.length != 0)
	{
		blk.innerHTML = "";
	
		let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			let tr = document.createElement('tr');

			let td1 = document.createElement('td');
			td1.append(name[i].id_s);
			tr.appendChild(td1);

			let td2 = document.createElement('td');
			td2.append(name[i].su);
			tr.appendChild(td2);

			let td3 = document.createElement('td');
			td3.append(name[i].na);
			tr.appendChild(td3);

			let td4 = document.createElement('td');
			td4.append(name[i].pa);
			tr.appendChild(td4);

			blk.appendChild(tr);
		}
	}
	else
		blk.innerHTML = '<span class="note">Нет студентов</span>';
}
window.addEventListener('load', do_stuff, false);

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
			var text = document.createTextNode(name[i].su + ' ' + name[i].na + ' ' +name[i].pa);
                        pp.appendChild(text);
		}
	}
	else
		pp.innerHTML = '<span class="note">FAILED!</span>';
    
} 
window.addEventListener('load', whoami_teach, false);

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 