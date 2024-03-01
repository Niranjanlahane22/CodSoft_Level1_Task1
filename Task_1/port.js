document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const navMenu = document.getElementById("navMenu");

    toggleButton.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "none" ? "block" : "none";
    });
});

const skillBars = document.querySelectorAll('.skill-level-bar');

skillBars.forEach((bar) => {
    const skillLevel = parseInt(bar.getAttribute('data-level'));
    bar.style.width = `${skillLevel}%`;
});

function trackDownload() {
}
document.addEventListener("DOMContentLoaded", function() {
    const resumeLink = document.querySelector(".resume-link");

    if (resumeLink) {
        resumeLink.addEventListener("click", function() {
            trackDownload();
        });
    }
});

const footerText = "© 2024 Niranjan Lahane. All rights reserved.";
const footerParagraph = document.querySelector('.footer p');
let charIndex = 0;
function typeFooterText() {
    if (charIndex < footerText.length) {
        footerParagraph.textContent += footerText.charAt(charIndex);
        charIndex++;
        setTimeout(typeFooterText, 50);
    }
}
typeFooterText();

