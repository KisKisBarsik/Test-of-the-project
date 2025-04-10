document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".custom-dropdown");

    dropdowns.forEach(dropdown => {

        const dropdownButton = dropdown.querySelector(".dropdown-button");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        const dropdownItems = dropdown.querySelectorAll(".dropdown-item");



        dropdownButton.addEventListener("click", function (e) {
            e.stopPropagation(); // Stops clicking outside the dropdown from closing the menu immediately
            dropdownContent.classList.toggle("show");
        });



        dropdownItems.forEach(item => {
            item.addEventListener("click", function () {
                dropdownButton.textContent = item.textContent;
                dropdownContent.classList.remove("show");
            });
        });



        // Closes dropdown if you click outside
        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.remove("show");
            }
        });



        // Smooth scroll (if desired, only applies to this dropdown)
        const itemHeight = 50;
        dropdownContent.addEventListener('wheel', (e) => {
            e.preventDefault();

            const direction = e.deltaY > 0 ? 1 : -1;
            const scrollAmount = itemHeight * direction;

            dropdownContent.scrollBy({
                top: scrollAmount,
                behavior: 'smooth'
            });
        });

    });
});



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