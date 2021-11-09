const form  = document.getElementById('login');

function login() {
    if (document.getElementById("username").value === 'admin') {
        if (document.getElementById("password").value === '123456789') {
            window.location.replace('Code/Web%20Application/src/home.html');
        }
        else {
            alert("Invalid Credentials")
        }
    }
}
var loadFile = function(event) {
    var output = document.getElementById('img');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
