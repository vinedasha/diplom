function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('updatpass');
	btn.addEventListener('click',pass,false);
}

window.addEventListener('load', main, false);

function pass()
{
    
        let pl = document.getElementById('pas');
        pl.textContent = '';
	let id_l = document.getElementById('id_l');
	let pass = document.getElementById('pass');
        if (id_l.value == "" || pass.value == "")
        {
            var text = document.createTextNode('Какое-то из полей пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
            let res = request('./pass/pass.php?id_l='+id_l.value + '&' + 'pass='+pass.value);
            if (res.length == 1034)
            {               
                 var text = document.createTextNode('id логин не правильный. Проверьте!');
                  pl.appendChild(text);
            }
            else
            {
                 window.open("http://portfol/admin/admin.php","_self");
            }
        }
}

