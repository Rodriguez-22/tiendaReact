document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
        let currentScrollPos = window.pageYOffset;
        let navbar = document.getElementById("navbar");

        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0"; // Muestra la navbar
        } else {
            navbar.style.top = "-60px"; // Oculta la navbar 
        }
        prevScrollPos = currentScrollPos;
    });
});

// footer js para mostrar el footer cuando se llega al final de la página

document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector("footer");

    function checkScroll() {
        let footerPosition = footer.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (footerPosition < screenHeight) {
            footer.classList.add("show-footer");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para verificar si ya está visible al cargar la página
});

