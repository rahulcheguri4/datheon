
/* Mobile Menu */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

/* Close Mobile Menu After Clicking Link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

/* Dark and Light Theme */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

/* Project Popup */

function showProject(title, description) {
    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalDescription").textContent =
        description;

    document.getElementById("projectModal").style.display = "flex";
}

/* Close Project Popup */

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}

/* Close Popup When Clicking Outside */

window.addEventListener("click", function (event) {
    const modal = document.getElementById("projectModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
});
