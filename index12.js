var userFound = JSON.parse(localStorage.getItem("userFound"))

var users = JSON.parse(localStorage.getItem("users"))

var spanProductText = document.querySelector(".spanProductText")
var spanProductText2 = document.querySelector(".spanProductText2")
var spanProductText3 = document.querySelector(".spanProductText3")
var spanProductText4 = document.querySelector(".spanProductText4")
var spanProductText5 = document.querySelector(".spanProductText5")

if (userFound && users) {

    var userIndex = users.findIndex(u => JSON.stringify(u) === JSON.stringify(userFound))

    if (userIndex === 0) {
        
        spanProductText.innerHTML = "User #1";

    } else if (userIndex === 1) {

        spanProductText2.innerHTML = "User #2";

    } else if (userIndex === 2) {

        spanProductText3.innerHTML = "User #3";

    } else if (userIndex === 3) {

        spanProductText4.innerHTML = "User #4";

    } else if (userIndex === 4) {

        spanProductText5.innerHTML = "User #5";

    }
        
}

console.log(userFound);
