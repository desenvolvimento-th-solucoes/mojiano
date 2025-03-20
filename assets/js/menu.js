const openMenuButton = document.querySelector("button#open-menu");
const menuItems = document.querySelector(".navbar .navbar-menu-mobile ul");

menuItems.style.display = "none";

openMenuButton.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(menuItems).display;
    
    if (currentDisplay === "none") {
        menuItems.style.display = "flex";
    } else {
        menuItems.style.display = "none";
    }
});