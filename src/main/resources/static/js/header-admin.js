document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuButton = document.querySelector(".menu-toggle");

    function toggleSidebar() {
        if (!sidebar || !overlay) return;

        const isOpen = sidebar.style.transform === "translateX(0px)";
        sidebar.style.transform = isOpen ? "translateX(-100%)" : "translateX(0px)";
        overlay.style.display = isOpen ? "none" : "block";
    }

    if (menuButton) {
        menuButton.addEventListener("click", toggleSidebar);
    }

    if (overlay) {
        overlay.addEventListener("click", toggleSidebar);
    }
});
