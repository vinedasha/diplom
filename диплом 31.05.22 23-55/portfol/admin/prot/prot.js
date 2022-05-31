function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function prot()
{
        let blk = document.getElementById('stud');
        let table = document.getElementById('tab');
        table.style.display = "tab";
	let res = request('./prot/prot.php');
	
	if(res != null && res.length != 0)
	{
		blk.innerHTML = "";
	
		let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			let tr = document.createElement('tr');

			let td1 = document.createElement('td');
			td1.append(name[i].id_login);
			tr.appendChild(td1);

			let td2 = document.createElement('td');
			td2.append(name[i].ivent);
			tr.appendChild(td2);

			let td3 = document.createElement('td');
			td3.append(name[i].date);
			tr.appendChild(td3);

			blk.appendChild(tr);
		}
	}
	else
		blk.innerHTML = '<span class="note">FAILED!</span>';
}
window.addEventListener('load', prot, false);

