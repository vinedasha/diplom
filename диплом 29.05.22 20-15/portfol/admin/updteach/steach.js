function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('updtechst');
	btn.addEventListener('click',updteach,false);
}

window.addEventListener('load', main, false);

function updteach()
{
      let pl = document.getElementById('updt');
      pl.textContent = '';
      let id_s = document.getElementById('id_sss');
      let id_t = document.getElementById('id_sst');
        if (id_t.value == "" || id_s.value == "")
        {
            var text = document.createTextNode('Какое-то из полей пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
            let res = request('./updteach/steach.php?id_s='+id_s.value + '&' + 'id_t='+id_t.value);
            if (res.length == 878 ||res.length == 1034)
            {               
                 var text = document.createTextNode('Что-то пошло не так. Проверьте!');
                  pl.appendChild(text);
            }
            else
             {
                  window.open("http://portfol/admin/admin.php","_self");
             }
        }
}
