var modal = document.getElementById("myModal");

var btn1 = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
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