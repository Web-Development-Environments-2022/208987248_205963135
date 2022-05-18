let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

function login(){
    // displayScreen("loginScreen")
    switchScreens("loginScreen")
    document.getElementById('accept').checked = false;
    manageSound();
}

function User(email, username, fullName, birthdate, password){
	this.email = email;
	this.username = username;
	this.fullName = fullName;;
	this.birthdate = birthdate;
	this.password = password;
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
            successfulLogin();
        }
    });
});

function successfulLogin(){
    let loginUsername = document.getElementById("loginUser");
    let loginPassword = document.getElementById("loginPass");
    let user = JSON.parse(localStorage.getItem(loginUsername.value));
    if(user.username === loginUsername.value && user.password === loginPassword.value){
        switchScreens("settingScreen")
        // let logoutBtn = document.getElementById("logoutBtn");
        // logoutBtn.innerText = "Welcome " + loginUsername.value;
        // const text = document.createTextNode(loginUsername.value);
        let user = document.getElementById("user");
        user.textContent ="Welcome " + loginUsername.value;
        switchHeaders(".navbar-container", ".navbar-container-logged-in");
        return true;
    }
    else{ 
        alert("One of the details proved was incorrect, please try again");
        return false;
    }
}

function switchHeaders(hide, show){
    $(hide).hide();
    $(show).show();
}

function logout(){
    switchHeaders('.navbar-container-logged-in', '.navbar-container');
    switchScreens("loginScreen")
    document.getElementById('accept').checked = false;
    manageSound();
    stopGame();
}
