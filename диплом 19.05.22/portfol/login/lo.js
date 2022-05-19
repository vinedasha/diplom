function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function do_stuff()
{
	let blk = document.getElementById('fio');
	let input = document.getElementsByTagName('input')[0];
	let input1 = document.getElementsByTagName('input')[1];


	let res = request('lo.php?logins='+input.value + '&' + 'passwords='+input1.value );

}

function main()
{
	var btn = document.getElementById('login');
	btn.addEventListener('click',do_stuff,false);
}

window.addEventListener('load', do_stuff, false);

