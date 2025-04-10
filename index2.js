function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i += 4) {
        formattedValue += value.slice(i, i + 4) + ' ';
    }

    input.value = formattedValue.trim();
}

const hamburger = document.querySelector(".hamburgerMenu");
const navText = document.querySelector(".navText");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navText.classList.toggle("active");
})

document.querySelector(".navA").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navText.classList.remove("active")
}))