function validateRegistration(){
    let regEmail = document.getElementById("regEmail")
    let regUsername = document.getElementById("regUser")
    let regName = document.getElementById("regName")
    let regBirth = document.getElementById("regBirth")
    let regPassword = document.getElementById("regPass")
}

function validateUsername() {
    let usernameValue = $('#regUser').val();
    if (usernameValue.length == '') {
    $('#usercheck').show();
        usernameError = false;
        return false;
    }
    else if((usernameValue.length < 3)||(usernameValue.length > 10)) {
        $('#usercheck').show();
        $('#usercheck').html
        ("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
    }
    else {
        $('#usercheck').hide();
    }
  }