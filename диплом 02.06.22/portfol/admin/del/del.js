function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function main()
{
	var btn = document.getElementById('del');
	btn.addEventListener('click',del,false);
}

window.addEventListener('load', main, false);

function del()
{
	let res = request('./del/del.php');
        window.open("http://portfol/admin/admin.php","_self");
        
}

