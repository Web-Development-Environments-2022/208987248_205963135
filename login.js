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
    let regEmail = document.getElementById("regEmail")
    let regUsername = document.getElementById("regUser")
    let regName = document.getElementById("regName")
    let regBirth = document.getElementById("regBirth")
    let regPassword = document.getElementById("regPass")
    let user = new User(regEmail.value, regUsername.value, regName.value, regBirth.value, regPassword.value);
    localStorage.setItem(regUsername.value,JSON.stringify(user));
    login();
}

function addK()
{
    let email = "k@gmail.com"
    let userName = "k"
    let name = "k"
    let birthdate = "2022-05-23"
    let password = "k"
    let user_k = new User(email,userName, name, birthdate, password);
    localStorage.setItem(userName,JSON.stringify(user_k));
}

$(function() {
    $("#login").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            loginUser: {
                required: true
            },
            loginPass: {
                required: true
            }
        },
        // Specify validation error messages
        messages: {
            loginUser: "Please enter your Username",
            loginPass: "Please provide a password"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            console.log("submitted")
            successfulLogin();
        }
    });
});


function successfulLogin(){
    let loginUsername = document.getElementById("loginUser");
    let loginPassword = document.getElementById("loginPass");
    let user = localStorage.getItem(loginUsername.value);
    if(user.username == loginUsername.value && user.password == loginPassword.value){
        alert("Success");
        return true;
    }
    else{
        return false;
    }
}