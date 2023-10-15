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





