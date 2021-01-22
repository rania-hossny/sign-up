var form2=document.getElementById("form2");
var signup=document.getElementById("signup");
var form1=document.getElementById("form1");
var login=document.getElementById("login");

login.addEventListener("click",getformdata1);
function getformdata1(e){
    e.preventDefault();
    var formdata=new FormData(form1);
    
    console.log(formdata.get('namefeild')  + " - " +formdata.get('passfeild'));
}

// signup.addEventListener("click",getformdata);
// function getformdata(e){
//     e.preventDefault();
//     var formdata=new FormData(form2);
//     if (formdata.get('passfeild') ==formdata.get('verifypassfeild') ){
//         alert("pass valid");
//     }
//     else{
//         alert("pass invalid");
//     }
//     console.log(formdata.get('namefeild') + " - " +formdata.get('emailfeild') + " - " +formdata.get('passfeild') + " - " +formdata.get('verifypassfeild'));
// }


// ////////////////////

var form2=document.getElementById("form2");
var username=document.getElementById("username");
// user name for login
var usernameL=document.getElementById("usernameL");
var email=document.getElementById("email");
var password=document.getElementById("password");
var password2=document.getElementById("password2");
//pass for login
var passwordL=document.getElementById("passwordL");



signup.addEventListener("click", (e)=>{
    e.preventDefault();
    checkinputs();
});

login.addEventListener("click", (e)=>{
    e.preventDefault();
    checkinputs2();
});

function checkinputs2(){

    var usernameLvalue=usernameL.value.trim();
    var passwordLvalue=passwordL.value.trim();

    if(usernameLvalue === ''){
        setErrorfor(usernameL,"user name can not be blank");
       

       
    }else{
    
        setSucessfor(usernameL);

    }


    if(passwordLvalue === ''){
        setErrorfor(passwordL,"password can not be blank");
       
    }else{
        
        setSucessfor(passwordL);

    }
}



function checkinputs(){

    var usernamevalue=username.value.trim();
    
    var emailvalue=email.value.trim();
    
    var passwordvalue=password.value.trim();

    var password2value=password2.value.trim();


    if(usernamevalue === ''){
        setErrorfor(username,"user name can not be blank");
       

       
    }else{
    
        setSucessfor(username);

    }

    if(emailvalue === ''){
        setErrorfor(email,"Email can not be blank");
        
    }else if(!isEmail(emailvalue)){
        setErrorfor(email,"Email is not valid");
    }else{

        setSucessfor(email);

    }

    if(passwordvalue === ''){
        setErrorfor(password,"password can not be blank");
       
    }else{
        
        setSucessfor(password);

    }

    if(password2value === ''){
        setErrorfor(password2,"password can not be blank");
       
    }else if(password2value !== passwordvalue){
        setErrorfor(password2,"passwords don't match");
    }else{
        
        setSucessfor(password2);

    }
}



function setErrorfor(input,message){
 const formcontrol= input.parentElement;
 const small=formcontrol.querySelector("small");
 small.innerText= message;
 formcontrol.className="formcontrol error";

}

function setSucessfor(input){
    const formcontrol= input.parentElement;
    formcontrol.className="formcontrol success";
}


function isEmail(email) {
	return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}
