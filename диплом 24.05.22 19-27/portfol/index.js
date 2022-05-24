
function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
window.addEventListener('load', main, false);
         
function main()
{
	var btn = document.getElementById('id');
	btn.addEventListener('click',gotonext,false);
}

function gotonext()
{
    var log = document.getElementById('login');
    var pass = document.getElementById('pass');
    let pl = document.getElementById('logpass');
   
    document.getElementById('logpass').textContent = '';
    
    let res = request('http://portfol/getteachid.php?login='+log.value+'&passwd='+pass.value);
    
    if (res == "" || res.length == 448)
    {               
            var text = document.createTextNode('Логин или пароль неправильный');
            pl.appendChild(text);
    }
   
   else  if (res != null && res.length != 0)
	{
		let id = JSON.parse(res); 
		for (let i = 0; i < id.length; i++)
		{
                    var input1 = id[i].id_login;
		}	
                window.open("http://portfol/portfolio/port.php?teach_id="+input1, "_self");
	}
}