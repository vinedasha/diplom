function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('updatsuatud');
	btn.addEventListener('click',stud,false);
}

window.addEventListener('load', main, false);

function stud()
{
        let pl = document.getElementById('sust');
        pl.textContent = '';
	let id_s = document.getElementById('id_st');
	let su = document.getElementById('sus');
        if (id_s.value == "" || su.value == "")
        {
            var text = document.createTextNode('Какое-то из полей пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
                let res = request('./stud/stud.php?id_s='+id_s.value + '&' + 'su='+su.value);
                 if (res.length == 1028)
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
