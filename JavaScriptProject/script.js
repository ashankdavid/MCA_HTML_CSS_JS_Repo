// saving the registration details from signup page
let signupForm = document.getElementById("signupForm");

if(signupForm){
    signupForm.addEventListener("submit", function(event){
        // this will prevent the page from reloading
        event.preventDefault();
        // reading the data from the input boxes
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Validate the Inpugt
        let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$&!?])(?=.*\d).{8,}$/

        if(name == "" || email == "" || password == ""){
            alert("All Fields Requiered");
            return ;
        }

        if(!pattern.test(password)){
            alert("Password Must Contain Atleast 1 Capital Letter, 1 Small Letter, 1 Special Character, 1 Digit and minimum 8 length");
            return ;
        }
    
        // javascript object creation
        let user = {name : name, email : email, password : password};
    
        localStorage.setItem("user", JSON.stringify(user));
    
        alert("SignedUp Successfully!");
        // redirect the page to Login Page (login.html)
            window.location.href = "login.html";
    });
}

let loginForm = document.getElementById("loginForm")

if(loginForm){
    loginForm.addEventListener("submit", function(event){
        // this will prevent the page from reloading
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // reading the data from local storage
        let user = JSON.parse(localStorage.getItem("user"));

        // comparing data from local storage with entered data
        if(email == user.email && password == user.password){
            alert("Login Successfull!");
            localStorage.setItem("isLoggedIn", "true");
            // redirect the page to Home (index.html)
            window.location.href = "index.html";
        }else{
            alert("Invalid Email or Password!");
        }
    });
}

//javaScript for changing the HEading after loggin
let heading = document.getElementById("welcomeMessage");

if(heading){
    // first get the user details
    let user = JSON.parse(localStorage.getItem("user"));
    // if the user exists then change the welcom message
    if(user){
        heading.innerHTML = "Welcome " + user.name + "!";
    }
}