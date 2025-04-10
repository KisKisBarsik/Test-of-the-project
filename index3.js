function showPCs() {

    var sumOfMoney = document.getElementById("inputSum").value
    const category = document.querySelector(".dropdown-button").textContent;

    localStorage.setItem("inputSumValue", sumOfMoney);
    localStorage.setItem("category", category)

    return true
}