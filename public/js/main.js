var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
document.getElementById("closeNav").addEventListener("click" ,function(){
        if(document.getElementById("closeNav").style.display == ""){
          closeNav();
        }else{
          openNav();
        }
});


function openNav() {
 document.getElementById("MenuBar").style.display="";
 document.getElementById("main").style.left = "220px";
 document.getElementById("main").style.width =  "calc(100% - 220px)";
 document.getElementById("closeNav").style.display = "";
}


function closeNav() {
  document.getElementById("main").style.left = "0%";
  document.getElementById("main").style.width = "100%";
 document.getElementById("MenuBar").style.display = "none";
 document.getElementById("closeNav").style.display = "block"
}

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}