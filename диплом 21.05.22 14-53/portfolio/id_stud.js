

function detal()
{
    var id_s = document.getElementById('id_stud');
    
    window.open("http://portfol/detail/detail.php?id_stud="+id_s.value, "_self");
}
window.addEventListener('load', det, false);
         
function det()
{
	var btn = document.getElementById('det');
	btn.addEventListener('click',detal,false);
}

function doc()
{
    var id_s = document.getElementById('id_stud');
    
    window.open("http://portfol/detail/doc.php?id_stud="+id_s.value, "_self");
}

window.addEventListener('load', docc, false);
         
function docc()
{
	var btn = document.getElementById('doc');
	btn.addEventListener('click',doc,false);
}

function achi()
{
    var id_s = document.getElementById('id_stud');
    
    window.open("http://portfol/detail/achi.php?id_stud="+id_s.value, "_self");
}

window.addEventListener('load', achii, false);
         
function achii()
{
	var btn = document.getElementById('achi');
	btn.addEventListener('click',achi,false);
}