function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function dowdoc()
{
    
    let pm = document.getElementById('name');
    
    pl.textContent = '';
    pm.textContent = '';
    if(id_d == "")
    {
        var text = document.createTextNode('Вы не написали id документа!');
            pl.appendChild(text);
    }
    else
    {
        let res = request('dowdoc.php?id_doc='+id_d);
        if(res.length == 711 || res.length == 712 || res.length == 713)
        {
            var text = document.createTextNode('Проверьте id документа');
            pl.appendChild(text);
        }
        else
        {
        let name = JSON.parse(res);
        for (let i = 0; i < name.length; i++)
        {
            var path = document.createTextNode(name[i].p_path);
            pm.appendChild(path);
        }
        } 
    }
}
window.addEventListener('load', main, false);

function main()
{
	var btn = document.getElementById('dow');
	btn.addEventListener('click',dowdoc,false);
}
