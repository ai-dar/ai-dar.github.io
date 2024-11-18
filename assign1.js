// Установка текущей даты и времени
const now = new Date();
document.getElementById("dateTime").textContent = now.toLocaleString();

// Обработчики для формы подписки
document.getElementById("subscribeBtn").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "none";
});

// Запрос погоды
document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = "Almaty";  
    const apiKey = "a184cec28e18696aa72e9629c0f4f09c"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById("weatherDisplay").textContent = `Weather in ${city}: ${weather}, Temperature: ${temp}°C`;
        })
        .catch(error => console.log("Error: ", error));
});
