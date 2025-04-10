function logInTheSystem() {

    var logInInput = document.getElementById("logInInput").value
    var passwordInput = document.getElementById("passwordInput").value

    var wrongUserNameOrPassword = document.querySelector(".wrongUserNameOrPassword")

    var users = JSON.parse(localStorage.getItem("users")) || []

    users = users.filter(user => user.userName !== '' && user.password !== '');

    const userFound = users.find(u => u.userName === logInInput && u.password === passwordInput)

    localStorage.setItem("userFound", JSON.stringify(userFound))

    // if (userFound) {

    //     window.location.href = "./index14.html"
        
    // } else {

    //     wrongUserNameOrPassword.innerHTML = "Wrong password or username"

    // }

    if (!userFound) {

        wrongUserNameOrPassword.innerHTML = "Wrong password or username"
        console.log(users);

    } else if (userFound === users[0]) {

        window.location.href = "./index14.html"
        
    } else if (userFound === users[1]) {

        window.location.href = "./index15.html"

    } else if (userFound === users[2]) {

        window.location.href = "./index16.html"

    } else if (userFound === users[3]) {

        window.location.href = "./index17.html"

    } else if (userFound === users[4]) {

        window.location.href = "./index18.html"

    } else if (userFound === users[5]) {

        

    } else if (userFound === users[6]) {

        

    } else if (userFound === users[7]) {

        
        
    } else if (userFound === users[8]) {

        
        
    } else if (userFound === users[9]) {

        

    }

}