document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero");

    const desktopHeader = document.querySelector(".desktop-header");
    const desktopMenu = desktopHeader.querySelector(".desktop-menu");
    const navBar = desktopMenu.querySelector("ul");

    const spanElement = desktopHeader.querySelector("span");
    const toggle = desktopHeader.querySelector(".switch");

    window.addEventListener("scroll", function () {
        const heroSectionBottom = heroSection.getBoundingClientRect().bottom;
        if (heroSectionBottom <= 0) {
            desktopHeader.classList.add("fixed");
            navBar.classList.add("scrolled");
            spanElement.style.opacity = 0;
            toggle.style.opacity = 0;
        } else {
            desktopHeader.classList.remove("fixed");
            navBar.classList.remove("scrolled");
            spanElement.style.opacity = 1;
            toggle.style.opacity = 1;
        }
    });
});