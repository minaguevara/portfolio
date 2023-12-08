const badges = document.querySelectorAll(".badge");
const slides = document.querySelectorAll(".badges-slide"); 

badges.forEach((badge) => {
    badge.addEventListener("mouseover", () => {
        badges.forEach((otherBadge) => {
            if (otherBadge !== badge) {
                otherBadge.style.transform = "scale(0.8)";
                otherBadge.style.filter = "brightness(50%)";
                otherBadge.style.color = "rgba(0, 0, 0, 0.5)";
                badge.style.opacity = "1";
                
                slides.forEach((slide) => {
                    slide.style.animationPlayState = "paused";
                });
            }
        });
    });

    badge.addEventListener("mouseout", () => {
        badges.forEach((otherBadge) => {
            if (otherBadge !== badge) {
                otherBadge.style.transform = "";
                otherBadge.style.filter = "";
                otherBadge.style.color = "";
                badge.style.opacity = "";

                slides.forEach((slide) => {
                    slide.style.animationPlayState = "running";
                });
            }
        });
    });
});
