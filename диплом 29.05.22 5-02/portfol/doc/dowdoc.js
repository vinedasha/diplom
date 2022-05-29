function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
function dowdoc()
{
    let id_d = document.getElementById('id_doc').value;
    let pl = document.getElementById('notid');
    let pm = document.getElementById('dow');
    
    document.getElementById('notid').textContent = '';
    if(id_d.value == "")
    {
        var text = document.createTextNode('Вы не написали id документа!');
            pl.appendChild(text);
    }
    else{
        
        let res = request('dowdoc.php?id_doc='+id_d);
        let re = request('name.php?id_doc='+id_d);
        let name = JSON.parse(res);
        let names = JSON.parse(re);
        for (let i = 0; i < name.length; i++)
        {
            var path = (document.createTextNode(name[i].p_path)).textContent;
        }
        for (let i = 0; i < names.length; i++)
        {
            var nama = (document.createTextNode(name[i].name)).textContent;
        }

        if (res != null)
           blk.innerHTML = output; // insert generated html code
        else
          blk.innerHTML = '<span class="note">request failed!</span>';



    }
    
}


window.addEventListener('load', main, false);

function main()
{
	var btn = document.getElementById('dow');
	btn.addEventListener('click',dowdoc,false);
}



function get_file_url(url) {
	
	var link_url = document.createElement("a");
	
	link_url.download = url.substring((url.lastIndexOf("/") + 1), url.length);
	link_url.href = url;
	document.body.appendChild(link_url);
	link_url.click();
	document.body.removeChild(link_url);
	delete link_url;

}
