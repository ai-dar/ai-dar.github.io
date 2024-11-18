// theme.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggleThemeBtn");

    // Устанавливаем тему из localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Обработчик для кнопки переключения
    toggleThemeBtn.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Сохраняем выбор пользователя
    });
});

// Функция для установки темы
function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("toggleThemeBtn").textContent = "Switch to Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("toggleThemeBtn").textContent = "Switch to Dark Mode";
    }
}
