// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (remembers choice, defaults to the system preference)
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.innerHTML = theme === "dark" ? "&#9788;" : "&#9790;";
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(saved || (prefersLight ? "light" : "dark"));

themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => navLinks.classList.remove("open"))
);
