function login() {
    if(sessionStorage.getItem("username") == null){
        username = ['admin', "user"]
        password = ['123456789', "user"]
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        console.log(sessionStorage.getItem("username").split(","))
        console.log(sessionStorage.getItem("password").split(","))

    }
    else{
        console.log(sessionStorage.getItem("username").split(","))
        console.log(sessionStorage.getItem("password").split(","))
    }

    username = sessionStorage.getItem("username").split(",")
    password = sessionStorage.getItem("password").split(",")
    
    console.log(username)
    

    temp1 = document.getElementById("username").value
    temp2 = document.getElementById("password").value
    flag = false
    for (let i = 0; i < username.length; i++) { 
        if (temp1 == username[i] && temp2 == password[i]) {
            flag = true
        }
    }
        if (flag) {
            window.location.replace('Code/Web%20Application/src/home.html');
        }
        else {
            alert("Invalid Credentials")
        }
    }


function signup() {
    if(sessionStorage.getItem("username") == null){
        username = ['admin', "user"]
        password = ['123456789', "user"]
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        console.log(sessionStorage.getItem("username"))

    }
    username = sessionStorage.getItem("username").split(",")
    password = sessionStorage.getItem("password").split(",")
    if(document.getElementById("username").value == null || document.getElementById("name").value == null || document.getElementById("password").value == null) {
        alert("Fill the Sign Up form completly")    
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
    }
    else {
        flag = true
        for (let i = 0; i < username.length; i++) { 
            if (document.getElementById("username").value == username[i])
                flag  = false}
        if(flag){
        username.push(document.getElementById("username").value)
        password.push(document.getElementById("password").value)
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        alert("Account Created")
        window.location.replace('index.html');}
        else{
            alert("Username Already Exists")
        }
    }

}

function forgot() {
    if(sessionStorage.getItem("username") == null){
        username = ['admin', "user"]
        password = ['123456789', "user"]
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        console.log(sessionStorage.getItem("username"))
    }
    username = sessionStorage.getItem("username").split(",")
    password = sessionStorage.getItem("password").split(",")

    flag=false
        for (let i = 0; i < username.length; i++) { 
            if (document.getElementById("username").value == username[i]) {
                password[i] = document.getElementById("password").value
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("password", password)
        flag = true
                alert("Password Changed")
                break
            }
        }
        if(flag)
        window.location.replace('index.html');

        alert("No User Found")

    
}
