document.querySelector("#copyright").textContent = new Date().getFullYear();


const navigationMenu = document.getElementById("navmenu");
const navigationButton = document.getElementById("toggle-menu");

// Toggle Mobile Menu
function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if(isVisible === "false") {
        if(navigationMenu.classList.contains("active")) {
            navigationMenu.setAttribute("data-visible", "true");
            navigationButton.setAttribute("data-visible", "true");
        }
        else{
            dataDisplay();
            setTimeout(toggleMenu, 100);
        }
    }

    function () {
        setTimeout(toggleMenu, 100); 
    }
    
}