function main()
{
	var btn = document.getElementById('select');
	btn.addEventListener('click',do_stuff,false);
}

window.addEventListener('load', main, false);

function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function do_stuff()
{
        document.getElementById('reg').textContent = '';
	let input = document.getElementsByTagName('input')[0];
	let input1 = document.getElementsByTagName('input')[1];
	let input2 = document.getElementsByTagName('input')[2];
        let input3 = document.getElementsByTagName('input')[3];
        let input4 = document.getElementsByTagName('input')[4];
        let pl = document.getElementById('reg');
        if (input.value == "" || input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "")
        {
            var text = document.createTextNode('Какое-то из полей пустое. Проверьте!');
            pl.appendChild(text);
        }
        else
        {
	let res = request('cont.php?logins='+input.value + '&' + 'passwords='+input1.value + '&' + 'su='+input2.value + '&' + 'na='+input3.value + '&' + 'pa='+input4.value );
        window.open("http://portfol/index.php?","_self");
        }
}


