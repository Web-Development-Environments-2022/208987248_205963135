let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

function register(){
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btn.style.left = "110px";
    form.style.height = "600px"
}

function login(){
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btn.style.left = "0";
    form.style.height = "480px"
}

function User(email, username, fullName, birthdate, password){
	this.email = email;
	this.username = username;
	this.fullName = fullName;;
	this.birthdate = birthdate;
	this.password = password;
}


function successfulRegisteraion(){
    let inputElements = registerForm.querySelectorAll("input, select, textarea");
    let flag = true;
    for(let i = 0; i < inputElements.length; i++){
        if(!inputElements[i].checkValidity()){
            flag = false;
            break;
        }
    }
    if(flag)
    {
        let regEmail = document.getElementById("regEmail")
        let regUsername = document.getElementById("regUser")
        let regName = document.getElementById("regName")
        let regBirth = document.getElementById("regBirth")
        let regPassword = document.getElementById("regPass")
        var user = new User(regEmail.value, regUsername.value, regName.value, regBirth.value, regPassword.value);
        localStorage.setItem(regUsername.value,JSON.stringify(user));
        login()
    }
}

function addK()
{
    let email = "k@gmail.com"
    let userName = "k"
    let name = "k"
    let birthdate = "2022-05-23"
    let password = "k"
    var user_k = new User(email,userName, name, birthdate, password);
    localStorage.setItem(regUsername.value,JSON.stringify(user_k));
}
