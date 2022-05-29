function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('delst');
	btn.addEventListener('click',dels,false);
}

window.addEventListener('load', main, false);

function dels()
{
    
        let pl = document.getElementById('dels');
        pl.textContent = '';
	let id_s = document.getElementById('id_ss');
        if (id_s.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
            let res = request('./del/stud/stud.php?id_s='+id_s.value);
            if (res.length == 988)
            {               
                 var text = document.createTextNode('id студента не правильный. Проверьте!');
                  pl.appendChild(text);
            }
            else
            {
                 window.open("http://portfol/admin/admin.php","_self");
            }
        }
}

