function registerANewAccout() {

    var userName = document.getElementById("makeAUserNameInput").value
    var password = document.getElementById("makeAPasswordInput").value

    var logError = document.querySelector(".error")

    if (!userName || !password) {

        logError.innerHTML = "You have to fill out the form!"

        return
        
    }

    var users = JSON.parse(localStorage.getItem("users")) || []

    const exists = users.some(u => u.userName === userName)

    if (exists) {

        logError.innerHTML = "It already exists such a user, write another username"

        return
        
    }

    users.push({userName: userName, password: password})

    users = users.filter(user => user.userName !== '' && user.password !== '');

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "./index10.html"

}