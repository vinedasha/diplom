function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('updatsu');
	btn.addEventListener('click',teach,false);
}

window.addEventListener('load', main, false);

function teach()
{
    
        let pl = document.getElementById('sut');
        pl.textContent = '';
	let id_t = document.getElementById('id_t');
	let su = document.getElementById('su');
        if (id_t.value == "" || su.value == "")
        {
            var text = document.createTextNode('Какое-то из полей пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
	let res = request('./teach/teach.php?id_t='+id_t.value + '&' + 'su='+su.value);
        window.open("http://portfol/admin/admin.php","_self");
        }
}

