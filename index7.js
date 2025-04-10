var activeBuyButton = localStorage.getItem("activeBuyButton")

var sumPurchasesList = localStorage.getItem("sumPurchasesList")

var sumOfThePayment = document.getElementById("sumOfThePayment")


if (activeBuyButton === "sum1") {

    sumOfThePayment.innerHTML = `${sumPurchasesList}`
        
}