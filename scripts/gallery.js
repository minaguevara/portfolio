// Portfolio
const galleryLinks = document.querySelectorAll(".gallery ul li a");
const closeButtons = document.querySelectorAll(".close");

galleryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const itemID = this.getAttribute("href");
        document.querySelector(itemID).classList.add("item_open");
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const parentPort = this.closest(".port");
        if (parentPort) {
            parentPort.classList.remove("item_open");
        }
    });
});

galleryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const topOffset = document.querySelector("#top").offsetTop;
        window.scrollTo({
            top: topOffset,
            behavior: "smooth",
        });
    });
});
