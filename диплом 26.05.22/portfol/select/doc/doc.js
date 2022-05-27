function request(url)
{
	let r = new XMLHttpRequest();
	r.open('GET', url, false);
	r.send();
	return r.responseText;
}
        
        function main()
{
	var btn = document.getElementById('sel');
	btn.addEventListener('click',sel,false);
}

window.addEventListener('load', main, false);

function sel()
{
        var id_s = parseGetParams().id_stud;
        var name = document.getElementById('myimage').files[0].name;
        const doc = document.getElementById('myimage').files[0];
        const byteFile = getAsByteArray(doc)
        
    /*    
        let reader = new FileReader(doc);
        let byteArray = reader.readAsArrayBuffer;*/
       // var docu = window.URL.revokeObjectURL(d);
/*const input = document.querySelector('input')
const reader = new FileReader();
const fileByteArray = [];

        input.addEventListener('change', (e) => {
  reader.readAsArrayBuffer(e.target.files[0]);
  reader.onloadend = (evt) => {
    if (evt.target.readyState === FileReader.DONE) {
      const arrayBuffer = evt.target.result,
        array = new Uint8Array(arrayBuffer);
      for (const a of array) {
        fileByteArray.push(a);
      }
    }
  }
})*/
        
        var re = request('./doc/getdoc.php?id_s='+id_s + '&' + 'name='+name+ '&' + 'myimage='+ byteFile);
        
        window.open("http://portfol/doc/doc.php?id_stud="+id_s, "_self");

}

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
}

/*function fileToByteArray(file) {
    return new Promise((resolve, reject) => {
        try {
            let reader = new FileReader();
            let fileByteArray = [];
            reader.readAsArrayBuffer(file);
            reader.onloadend = (evt) => {
                if (evt.target.readyState == FileReader.DONE) {
                    let arrayBuffer = evt.target.result,
                        array = new Uint8Array(arrayBuffer);
                    for (byte of array) {
                        fileByteArray.push(byte);
                    }
                }
                resolve(fileByteArray);
            }
        }
        catch (e) {
            reject(e);
        } 
    })
}*/

/*function getByteArray(file) {
   return new Promise(function(resolve, reject) {
       fileReader.readAsArrayBuffer(file);
       fileReader.onload = function(ev) {
           const array = new Uint8Array(ev.target.result);
           const fileByteArray = [];
           for (let i = 0; i < array.length; i++) {
               fileByteArray.push(array[i]);
           }
           resolve(array);  // successful
       }
       fileReader.onerror = reject; // call reject if error
   })
}*/

/*function readfile(files)
{
  var formData = new FormData();
  formData.append(files[0].name, files[0]);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/input_file', true);
  xhr.onload = function(e) {};
  xhr.send(formData);
}*/

function getAsByteArray(file) {
  return new Uint8Array(file)
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    // Create file reader
    let reader = new FileReader()

    // Register event listeners
 reader.addEventListener("loadend", e => resolve(e.target.result))
 reader.addEventListener("error", reject)

    // Read file
 reader.readAsArrayBuffer(file)
  })
}