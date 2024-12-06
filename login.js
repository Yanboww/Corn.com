let login = document.getElementById("enter")
let userName = document.getElementById("user-ipt")
let pass = document.getElementById("pass-ipt")
login.addEventListener("click", trylog)
function trylog()
{
    console.log(userName.value)
    if(userName.value.length >= 4)
    {
        if(userName.value.length <=8)
        {
            if(pass.value.length >= 8)
                {
                    location.replace("home.html");
                    localStorage.setItem("user",userName.value)
                }
                else{
                    console.log("short pass")
                    alert("Password need to be 8 characters long!")
                }
        }
        else{
            alert("Username too long! It is at most 8 characters long")
            console.log("long username")
        }
    }
    else{
        console.log("short user")
        alert("User name must be at least 4 characters long!")
    }
}
if(localStorage.getItem("user")){
    location.replace("home.html");
}