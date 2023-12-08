const categories = document.querySelectorAll(".category");
const skills = document.querySelectorAll(".skill");

categories.forEach((category) => {
    category.addEventListener("mouseover", () => {
        const categoryID = category.id;
        skills.forEach((skill) => {
            if (skill.classList.contains(categoryID)) {
                skill.classList.add("highlighted");

                const iElement = category.querySelector("i");
                iElement.style.fontSize = `${iElement.style.fontSize} * 2`;
            } else {
                skill.classList.remove("highlighted");
            }
        });
    });

    category.addEventListener("mouseout", () => {
        skills.forEach((skill) => {
            skill.classList.remove("highlighted");
        });
    });
});
