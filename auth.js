// auth.js

// Проверка состояния входа и изменение кнопки "Login" на "Logout" при необходимости
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

// Функция для выхода пользователя и изменения кнопки обратно на "Login"
function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    location.reload();
}
