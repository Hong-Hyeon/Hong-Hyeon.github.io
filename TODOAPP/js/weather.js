function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=metric`
    weather_data = fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector('#weather p:first-child')
        const weatherContainer = document.querySelector("#weather p:last-child")
        
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp

        weatherContainer.innerText = `${weather} / ${temp}°C`;
        city.innerText = name;
    });
    // console.log(weather_data)
}
function onGeoError(){
    alert("Can't find u. No weather for u.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_Key = "62f211c50bfcae4f6fcde5b0090123c5"