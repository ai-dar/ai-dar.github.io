document.addEventListener("DOMContentLoaded", () => {
    const authBtn = document.getElementById("authBtn");
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

function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    location.reload();
}
