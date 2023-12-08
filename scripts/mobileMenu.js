const mobileHeader = document.querySelector(".mobile-header");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".fa-circle-xmark");
const hero = document.querySelector(".hero");

mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
    hero.classList.toggle("mobile");
});

closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    mobileMenuIcon.classList.remove("active");
    hero.classList.remove("mobile");
});
