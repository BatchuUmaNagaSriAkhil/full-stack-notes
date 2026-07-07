function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "Anas" && password === "anas123"){

        sessionStorage.setItem("loggedIn","true");

        window.location.href = "Student.html";

    }else{

        document.getElementById("msg").innerHTML = "Invalid Username or Password";

    }

}