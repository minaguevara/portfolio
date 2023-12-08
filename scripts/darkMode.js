const darkModeToggleMobile = document.querySelector("#darkModeToggleMobile");
const darkModeToggleDesktop = document.querySelector("#darkModeToggle");

// Check if the user has a preference stored in localStorage
const isDarkModePreferred = localStorage.getItem("darkMode") === "enabled";

// Set the initial state based on the stored preference
if (isDarkModePreferred) {
    document.documentElement.classList.add("dark-mode");
    darkModeToggleMobile.checked = true;
    darkModeToggleDesktop.checked = true;
}

darkModeToggleMobile.addEventListener("change", toggleDarkMode);
darkModeToggleDesktop.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
    const rootElement = document.documentElement;

    const isDarkModeEnabled = rootElement.classList.contains("dark-mode");

    rootElement.classList.toggle("dark-mode");

    // Update localStorage based on the current state
    if (rootElement.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }

    if (isDarkModeEnabled) {
        darkModeToggleMobile.checked = false;
        darkModeToggleDesktop.checked = false;
    } else {
        darkModeToggleMobile.checked = true;
        darkModeToggleDesktop.checked = true;
    }
}
