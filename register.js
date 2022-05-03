function validateRegistration(){
    let regEmail = document.getElementById("regEmail")
    let regUsername = document.getElementById("regUser")
    let regName = document.getElementById("regName")
    let regBirth = document.getElementById("regBirth")
    let regPassword = document.getElementById("regPass")
}

$("form[name='registration']").validate({
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
        pattern: "(?=.*\d)(?=.*[A-Za-z])"
      },
      regEmail: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      regName: {
        required: true,
        pattern: "(?=.*[A-Za-z])"
      },
      regBirth: {
        required: true,
          date: true
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });