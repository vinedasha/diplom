function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}

        function main()
{
        var bt = document.getElementById('exit');
	bt.addEventListener('click',exit,false);
        var b = document.getElementById('upd');
	b.addEventListener('click',upd,false);
}

window.addEventListener('load', main, false);

function exit()
{
    let id_t = parseGetParams().id_teach;
    window.open("http://portfol/portfolio/port.php?teach_id="+id_t, "_self");
}

function upd()
{
    let id_t = parseGetParams().id_teach;
    let id_s = parseGetParams().id_stud;
    window.open("http://portfol/detail/upd/upd.php?teach_id="+id_t + '&id_stud='+id_s, "_self");
}

function do_stuff()
{
        let id = parseGetParams().id_stud;
	let blk = document.getElementById('deta');
	let table = document.getElementById('table');
	table.style.display = "table";
	let res = request('det.php?id_stud='+id);

	
	if(res != null && res.length != 0)
	{
		blk.innerHTML = "";
	
		let name = JSON.parse(res);
		for (let i = 0; i < name.length; i++)
		{
			let tr = document.createElement('tr');

			let td1 = document.createElement('td');
			td1.append(name[i].id_stud);
			tr.appendChild(td1);

			let td2 = document.createElement('td');
			td2.append(name[i].surname);
			tr.appendChild(td2);

			let td3 = document.createElement('td');
			td3.append(name[i].name);
			tr.appendChild(td3);

			let td4 = document.createElement('td');
			td4.append(name[i].patronymic);
			tr.appendChild(td4);
                        
                        let td5 = document.createElement('td');
			td5.append(name[i].birthday);
			tr.appendChild(td5);
                        
                        let td6 = document.createElement('td');
			td6.append(name[i].address_reg);
			tr.appendChild(td6);
                        
                        let td7 = document.createElement('td');
			td7.append(name[i].address_fact);
			tr.appendChild(td7);
                        
                        let td8 = document.createElement('td');
			td8.append(name[i].number);
			tr.appendChild(td8);
                        
                       let td9 = document.createElement('td');
			td9.append(name[i].snils);
			tr.appendChild(td9);
                       
                       let td10 = document.createElement('td');
			td10.append(name[i].med_pol);
			tr.appendChild(td10);
                        
                        let td11 = document.createElement('td');
			td11.append(name[i].passport);
			tr.appendChild(td11);
                        
                        let td12 = document.createElement('td');
			td12.append(name[i].average_score);
			tr.appendChild(td12);
                        
                        let td13 = document.createElement('td');
			td13.append(name[i].fio_m);
			tr.appendChild(td13);
                        
                        let td14 = document.createElement('td');
			td14.append(name[i].work_m);
			tr.appendChild(td14);
                        
                        let td15 = document.createElement('td');
			td15.append(name[i].number_m);
			tr.appendChild(td15);
                        
                        let td16 = document.createElement('td');
			td16.append(name[i].fio_f);
			tr.appendChild(td16);
                        
                        let td17 = document.createElement('td');
			td17.append(name[i].work_f);
			tr.appendChild(td17);
                        
                        let td18 = document.createElement('td');
			td18.append(name[i].number_f);
			tr.appendChild(td18);
                        
                        let td19 = document.createElement('td');
			td19.append(name[i].family);
			tr.appendChild(td19);
                        
                        let td20 = document.createElement('td');
			td20.append(name[i].num_child);
			tr.appendChild(td20);
                        
                         let td21 = document.createElement('td');
			td21.append(name[i].child_pass);
			tr.appendChild(td21);
                        
                        let td22 = document.createElement('td');
			td22.append(name[i].acc_kdn);
			tr.appendChild(td22);
                        
                        let td23 = document.createElement('td');
			td23.append(name[i].chr_dis);
			tr.appendChild(td23);
                        
                        let td24 = document.createElement('td');
			td24.append(name[i].disab);
			tr.appendChild(td24);

			blk.appendChild(tr);
		}
	}
	else
		blk.innerHTML = '<span class="note">FAILED!</span>';
}

window.addEventListener('load', do_stuff, false);



function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 