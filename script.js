var from=document.getElementById("form");
var btn=document.getElementById("btn");


btn.addEventListener("click",getformdata);
function getformdata(e){
    e.preventDefault();
    var formdata=new FormData(form);
    console.log(formdata.get('namefeild') + " - " +formdata.get('emailfeild') + " - " +formdata.get('passfeild') + " - " +formdata.get('verifypassfeild'));
}

