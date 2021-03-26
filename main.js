const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');
const btn = document.getElementById('btn');
const verClave = document.getElementById('verClave');
const verClave1 = document.getElementById('verClave1');
const userLabel = document.getElementById('userLabel');
const labelEmail = document.getElementById('labelEmail');
const labelPassword = document.getElementById('labelPassword');

const labelPassword2 = document.getElementById('labelPassword2');
const errorA = 'Enter a name';
const errorB = 'Enter a mail';
const errorC = 'Enter a password';
const errorD = 'Repeat the password';
const errorE = 'Pass doesnt match';
const errorF = 'Enter a valid email'
const errorG = 'Password must have 5 characters'
const ErrorG1 = '';
const succes1 = ''
const mail = Email.value;
window.onload = timer;
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function timer(){
    setInterval(hideKey,5000);
}

function hideKey (){    
    verClave.addEventListener('mousedown', mostrarClave);
    verClave.addEventListener('mouseup', ocultarClave);
    verClave1.addEventListener('mousedown', mostrarClave1);
    verClave1.addEventListener('mouseup', ocultarClave1);

    function mostrarClave(){
        Password.type = 'text';       
    }  
    function ocultarClave (){  
        Password.type = 'password';           
    }    
    function mostrarClave1(){
        Password2.type = 'text';         
    } 
    function ocultarClave1(){
        Password2.type = 'password';          
    }    
}



btn.onclick = chequeo;

function chequeo(){

    (Username.value.length >20 && Username.value.length <= 5 ) ?
     error(Username,userLabel,errorA) : success(Username,userLabel,succes1);

    (Email.value.length >20 && Email.value.length <= 5) ?
      error(Username,userLabel,errorA) : validarMail();

    (Password.value.length >20 || Password.value.length <= 5) ?
     error(Password,labelPassword,errorG): validarClave();

    (Password2.value.length >20 || Password2.value.length <= 5) ?
     error(Password2,labelPassword2,errorG1) :  success(Password2,labelPassword2,succes1);
   
}

    function validarMail(){        
        (regex.test(Email.value)) ? 
        success(Email,labelEmail,succes1) : error(Email,labelEmail,errorF);   
    }

    function validarClave(){
        (Password.value == Password2.value) ? 
        success(Password2,labelPassword,succes1) : error1(Password2,labelPassword, errorE);
    }

    
function error(x, y, n){
    x.style.color = 'red';
    y.textContent = n;
    y.style.color = 'red';
    x.style.border = 'solid 2px red';    
}    

function error1(x, y, n){
    x.style.color = 'red';
    labelPassword2.style.color = 'red';
    labelPassword2.textContent = 'Look up'
    y.textContent = n;
    y.style.color = 'red';
    x.style.border = 'solid 2px red';    
} 

function success(x, y, n){
    x.style.color = 'rgb(24, 85, 24)';
    Password.style.border = 'solid 2px rgb(24, 85, 24)'; 
    y.textContent = n;
    y.style.color = 'rgb(24, 85, 24)';
    x.style.border = 'solid 2px rgb(24, 85, 24)'; 
}

