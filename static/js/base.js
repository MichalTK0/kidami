function toggleDropdown(event) {
    event.stopPropagation();
    var dropdown = document.querySelector(".header-dropdown-content");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    var dropdown = document.querySelector(".header-dropdown-content");
    if (dropdown.style.display === "block" && event.target !== dropdown) {
        dropdown.style.display = "none";
    }
});

function copyToClipboard() {
    var email = "your_email!";
    var emailButton = document.querySelector(".email-button");

    // Create a temporary input element to copy the email to the clipboard
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", email);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Change the button text to "Copied" temporarily
    emailButton.textContent = "[Copied!]";

    // Reset the button text after a brief delay
    setTimeout(function() {
        emailButton.textContent = "[Email]";
    }, 2000); // Change the delay (in milliseconds) as needed
}

// Function to toggle theme
function toggleTheme() {
    const button = document.getElementById('themeToggle');

    if (document.documentElement.classList.contains('light-mode')) {
        // Switch to dark mode
        document.documentElement.classList.remove('light-mode');
        // Change the button text to "Dark Mode"
        button.textContent = '[Dark Mode! 😎]';
        // Save the theme state to localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light mode
        document.documentElement.classList.add('light-mode');
        // Change the button text to "Light Mode"
        button.textContent = '[Light Mode! ... 🤨]';
        // Save the theme state to localStorage
        localStorage.setItem('theme', 'light');
    }

    // Reset the button text after a few seconds
    setTimeout(function() {
        button.textContent = '[Theme]';
    }, 2000); // Change back to "Theme" after 3 seconds
}

// Function to load theme state on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
    }
}

// Load theme state on page load
loadTheme();

function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
        const now = new Date();
        const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
        const timeString = now.toLocaleTimeString(undefined, timeOptions);
        clock.textContent = "[" + timeString + "]";
    }
}

function startClock() {
    updateClock(); // Update the clock immediately
    setInterval(updateClock, 1000); // Update the clock every second
}

document.addEventListener("DOMContentLoaded", startClock);

document.addEventListener("DOMContentLoaded", function() {
    const readToggles = document.querySelectorAll(".read-toggle");

    readToggles.forEach(function(toggle) {
        toggle.addEventListener("click", function(event) {
            event.preventDefault();
            const description = event.target.closest(".description");
            const fullText = description.querySelector(".full");
            const truncatedText = description.querySelector(".truncated");
            const buttonText = event.target;

            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "block";
                truncatedText.style.display = "none";
                buttonText.innerText = "Read less";
            } else {
                fullText.style.display = "none";
                truncatedText.style.display = "block";
                buttonText.innerText = "Read more";
            }
        });
    });
});





