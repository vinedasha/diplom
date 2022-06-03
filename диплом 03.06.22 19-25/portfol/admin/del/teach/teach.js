function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('delte');
	btn.addEventListener('click',delt,false);
}

window.addEventListener('load', main, false);

function delt()
{
    
        let pl = document.getElementById('delt');
        pl.textContent = '';
	let id_t = document.getElementById('id_tt');
        if (id_t.value == "")
        {
            var text = document.createTextNode('Поле пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
            let res = request('./del/teach/teach.php?id_t='+id_t.value);
             if (res.length == 1008)
            {               
                 var text = document.createTextNode('id преподователя не правильный. Проверьте!');
                  pl.appendChild(text);
            }
            else
            {
                 window.open("http://portfol/admin/admin.php","_self");
            }
        }
}

