var inputSumValue = parseInt(localStorage.getItem("inputSumValue"))
var category = localStorage.getItem("category")

var hidde1 = document.getElementsByClassName("hidde1")
var hidde2 = document.getElementsByClassName("hidde2")
var hidde3 = document.getElementsByClassName("hidde3")
var hidde4 = document.getElementsByClassName("hidde4")
var hidde5 = document.getElementsByClassName("hidde5")
var hidde6 = document.getElementsByClassName("hidde6")
var hidde7 = document.getElementsByClassName("hidde7")
var hidde8 = document.getElementsByClassName("hidde8")
var hidde9 = document.getElementsByClassName("hidde9")

var hidde10 = document.getElementsByClassName("hidde10")
var hidde11 = document.getElementsByClassName("hidde11")
var hidde12 = document.getElementsByClassName("hidde12")
var hidde13 = document.getElementsByClassName("hidde13")
var hidde14 = document.getElementsByClassName("hidde14")
var hidde15 = document.getElementsByClassName("hidde15")
var hidde16 = document.getElementsByClassName("hidde16")
var hidde17 = document.getElementsByClassName("hidde17")
var hidde18 = document.getElementsByClassName("hidde18")

var hidde19 = document.getElementsByClassName("hidde19")
var hidde20 = document.getElementsByClassName("hidde20")
var hidde21 = document.getElementsByClassName("hidde21")
var hidde22 = document.getElementsByClassName("hidde22")
var hidde23 = document.getElementsByClassName("hidde23")
var hidde24 = document.getElementsByClassName("hidde24")
var hidde25 = document.getElementsByClassName("hidde25")
var hidde26 = document.getElementsByClassName("hidde26")


var nothing = document.getElementsByClassName("nothing")

var rowResults = document.querySelectorAll(".rowResults")


if (inputSumValue <= 499) {

    nothing[0].style.display = "block"
    
} else if (inputSumValue >= 3600 && category === "Gaming") {

    rowResults[0].style.display = "flex"

    hidde1[0].style.display = "block"
    hidde2[0].style.display = "block"

} else if (inputSumValue >= 3000 && category === "Gaming") {

    rowResults[0].style.display = "flex"

    hidde1[0].style.display = "block"
    hidde2[0].style.display = "block"
    hidde3[0].style.display = "block"

} else if (inputSumValue >= 2000 && category === "Gaming") {

    rowResults[0].style.display = "flex"

    hidde3[0].style.display = "block"
    hidde4[0].style.display = "block"
    hidde5[0].style.display = "block"

} else if (inputSumValue >= 1400 && category === "Gaming") {

    rowResults[0].style.display = "flex"

    hidde6[0].style.display = "block"
    hidde7[0].style.display = "block"

} else if (inputSumValue >= 1000 && category === "Gaming") {

    rowResults[0].style.display = "flex"

    hidde8[0].style.display = "block"
    hidde9[0].style.display = "block"

} else if (inputSumValue >= 6000 && category === "3D Modeling") {

    hidde10[0].style.display = "block"

} else if (inputSumValue >= 5000 && category === "3D Modeling") {

    hidde10[0].style.display = "block"
    hidde11[0].style.display = "block"

} else if (inputSumValue >= 3950 && category === "3D Modeling") {

    hidde11[0].style.display = "block"
    hidde12[0].style.display = "block"

} else if (inputSumValue >= 3400 && category === "3D Modeling") {

    hidde12[0].style.display = "block"
    hidde13[0].style.display = "block"

} else if (inputSumValue >= 2900 && category === "3D Modeling") {

    hidde13[0].style.display = "block"
    hidde14[0].style.display = "block"

} else if (inputSumValue >= 2100 && category === "3D Modeling") {

    hidde14[0].style.display = "block"
    hidde15[0].style.display = "block"

} else if (inputSumValue >= 1700 && category === "3D Modeling") {

    hidde15[0].style.display = "block"
    hidde16[0].style.display = "block"

} else if (inputSumValue >= 1400 && category === "3D Modeling") {

    hidde16[0].style.display = "block"
    hidde17[0].style.display = "block"

} else if (inputSumValue >= 1000 && category === "3D Modeling") {

    hidde17[0].style.display = "block"
    hidde18[0].style.display = "block"

} else if (inputSumValue >= 2400 && category === "Education") {

    hidde19[0].style.display = "block"

} else if (inputSumValue >= 2000 && category === "Education") {

    hidde19[0].style.display = "block"
    hidde20[0].style.display = "block"

} else if (inputSumValue >= 1100 && category === "Education") {

    hidde20[0].style.display = "block"
    hidde21[0].style.display = "block"

} else if (inputSumValue >= 600 && category === "Education") {

    hidde22[0].style.display = "block"
    hidde23[0].style.display = "block"
    hidde24[0].style.display = "block"

} else if (inputSumValue >= 500 && category === "Education") {

    hidde25[0].style.display = "block"
    hidde26[0].style.display = "block"

} else if (inputSumValue >= 2400 &&  category === "Work") {

    hidde19[0].style.display = "block"

} else if (inputSumValue >= 2000 &&  category === "Work") {

    hidde19[0].style.display = "block"
    hidde20[0].style.display = "block"

} else if (inputSumValue >= 1100 &&  category === "Work") {

    hidde20[0].style.display = "block"
    hidde21[0].style.display = "block"

} else if (inputSumValue >= 600 &&  category === "Work") {

    hidde22[0].style.display = "block"
    hidde23[0].style.display = "block"
    hidde24[0].style.display = "block"

} else if (inputSumValue >= 500 &&  category === "Work") {

    hidde25[0].style.display = "block"
    hidde26[0].style.display = "block"

} else {

    nothing[0].style.display = "block";

}

