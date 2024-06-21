const apiKey = "0d409ad987f199c32290d7d415d91031";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city  `&appid={apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + data.main.temp + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + Km/hr;
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = ".rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = ".rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./weather app with js\images\clouds.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector('.error').style.display = "none";

    }

}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})