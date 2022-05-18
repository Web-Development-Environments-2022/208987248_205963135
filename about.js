var modal = document.getElementById("myModal");

var btnLogout = document.getElementById("myBtnLogout");

var btnLogin = document.getElementById("myBtnLogin");

var span = document.getElementsByClassName("close")[0];

btnLogout.onclick = function() {
  modal.style.display = "block";
  // document.getElementById('accept').checked = false;
  // manageSound();
}

btnLogin.onclick = function() {
  modal.style.display = "block";
  // document.getElementById('accept').checked = false;
  // manageSound();
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('keyup', function (event) {
    if ( event.keyCode == 27 )   {
       document.getElementById('myModal').remove()
    }
  })