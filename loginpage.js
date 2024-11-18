// Display current date and time
const now = new Date();
document.getElementById("dateTime").textContent = now.toLocaleString();

// Elements for toggling between Sign In and Sign Up
let isSignUp = false;
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const toggleAuthMode = document.getElementById("toggleAuthMode");
const authBtn = document.getElementById("authBtn");

// Check login status on load and update "Login/Logout" button
window.addEventListener("load", function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        authBtn.textContent = "Logout";
        authBtn.href = "#";
        authBtn.addEventListener("click", handleLogout);
    } else {
        authBtn.textContent = "Login";
        authBtn.href = "loginpage.html";
    }
});

// Toggle between Sign In and Sign Up forms
toggleAuthMode.addEventListener("click", function (event) {
    event.preventDefault();
    isSignUp = !isSignUp;

    if (isSignUp) {
        formTitle.textContent = "Create a New Account";
        submitBtn.textContent = "Sign Up";
        toggleAuthMode.textContent = "Already have an account? Sign in";
    } else {
        formTitle.textContent = "Login to Your Account";
        submitBtn.textContent = "Login";
        toggleAuthMode.textContent = "Don't have an account? Sign up";
    }
});

// Form submission for Sign In and Sign Up
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isSignUp) {
        // Sign Up: save user to localStorage
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        } else {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Account created successfully! Please log in.");
            isSignUp = false;
            formTitle.textContent = "Login to Your Account";
            submitBtn.textContent = "Login";
            toggleAuthMode.textContent = "Don't have an account? Sign up";
        }
    } else {
        // Sign In: check if user exists
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", username);
            alert("Welcome, " + username + "!");
            authBtn.textContent = "Logout";
            authBtn.href = "#";
            authBtn.addEventListener("click", handleLogout);
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    }
});

// Logout functionality
function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    authBtn.textContent = "Login";
    authBtn.href = "loginpage.html";
}
