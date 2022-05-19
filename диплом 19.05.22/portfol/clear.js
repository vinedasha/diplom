function clear() 
{
            document.getElementById('logpass').value = '';
}
function mai()
{
	var btn = document.getElementById('id');
	btn.addEventListener('click',clear,false);
}

window.addEventListener('load', mai, false);


