const form  = document.getElementById('login');

function login() {
    if (document.getElementById("username").value === 'admin') {
        if (document.getElementById("password").value === '123456789') {
            window.location.replace('Web%20Application/src/home.html');
        }
        else {
            alert("Invalid Credentials")
        }
    }
}
