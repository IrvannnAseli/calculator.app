export default class Theme {
    constructor() {
        this.themeToggleButton = document.getElementById("theme-toggle");
        this.isDarkMode = false;

        this.themeToggleButton.addEventListener("click", () => this.toggleTheme());
        this.applyInitialTheme();
    }

    applyInitialTheme() {
        this.isDarkMode = localStorage.getItem("darkMode") === "true";
        this.updateTheme();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem("darkMode", this.isDarkMode);
        this.updateTheme();
    }

    updateTheme() {
        document.body.classList.toggle("dark-mode", this.isDarkMode);
        this.themeToggleButton.classList.toggle("dark-mode", this.isDarkMode);
        this.themeToggleButton.classList.toggle("light-mode", !this.isDarkMode);
    }
}
