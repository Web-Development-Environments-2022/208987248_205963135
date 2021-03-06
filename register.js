function register(){
    switchScreens("registerScreen")
    document.getElementById('accept').checked = false;
    manageSound();


}

function successfulRegisteraion(){
    let regEmail = document.getElementById("regEmail")
    let regUsername = document.getElementById("regUser")
    let regName = document.getElementById("regName")
    let regBirth = document.getElementById("regBirth")
    let regPassword = document.getElementById("regPass")
    if(localStorage.getItem(regUsername.value) === null) {
        let user = new User(regEmail.value, regUsername.value, regName.value, regBirth.value, regPassword.value);
        localStorage.setItem(regUsername.value,JSON.stringify(user));
        login();
    }
    else{
        alert("This user is registered, please try to login or choose different username")
    }
    
}

$(function() {
    $("#register").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            regUser: {
                required: true
            },
            regPass: {
                required: true,
                minlength: 6,
                pattern: /[A-Za-z0-9]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)/
            },
            regEmail: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            regName: {
                required: true,
                pattern: /^[a-zA-Z ]+$/
            },
            regBirth: {
                required: true,
                date: true
            }
        },
        // Specify validation error messages
        messages: {
            regUser: "Please enter your Username",
            regPass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                pattern: "The password must contain at least one number and one uppercase or lowercase letter"
            },
            regEmail: {
                required: "Please enter an email address",
                email: "This input is not an email format"
            },
            regName: {
                required: "Please enter fullName",
                pattern: "Full name cannot contain numbers"
            },
            regBirth:{
                required: "Please enter birth date"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            successfulRegisteraion();
        }
    });
});