const heroRef = document.getElementById("hero");
const delayFactor = 0.1;

let currentX = 0;
let currentY = 0;

const updateMousePosition = (ev) => {
    if (!heroRef) return;
    const { clientX, clientY } = ev;
    currentX += (clientX - currentX) * delayFactor;
    currentY += (clientY - currentY) * delayFactor;
    heroRef.style.setProperty("--x", `${currentX}px`);
    heroRef.style.setProperty("--y", `${currentY}px`);
};

window.addEventListener("mousemove", updateMousePosition);

window.dispatchEvent(new Event("resize"));

const handleBeforeUnload = () => {
    window.removeEventListener("mousemove", updateMousePosition);
    window.removeEventListener("resize", handleResize);
};

const handleResize = () => {
    heroRef.style.width = window.innerWidth + "px";
    heroRef.style.height = window.innerHeight + "px";
};

window.addEventListener("beforeunload", handleBeforeUnload);
window.addEventListener("resize", handleResize);

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Coder",
    "software engineer",
    "front-end developer",
    "data\nanalyst",
    "back-end developer",
    "techie",
    "Web Developer",
    "business\nanalyst",
    "full-stack developer",
    "Defender of\nEquality",
    "design Enthusiast",
    "digital nomad",
    "Defender of\nInclusivity",
    "cinephile",
    "life-long learner",
    "dog\nmom",
    "Problem solver",
    "gemini"
];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
