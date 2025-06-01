    document.addEventListener("DOMContentLoaded",()=>{
    const cityInput=document.getElementById("location-input");
    const getWeatherBtn=document.getElementById("search-button");
    const mainTemp=document.getElementById("temperature");
    const maxTemp=document.getElementById("max-temp");
    const minTemp=document.getElementById("min-temp");
    const feelsLike=document.getElementById("feels-like");
    const windSpeed=document.getElementById("wind-speed");
    const descContent=document.getElementById("weather-desc");
    const cityDisplay=document.getElementById("city-name");
    const weatherGif=document.getElementById("weather-gif");
    
    const errorMsg=document.querySelector(".error-message");
    const loading=document.querySelector(".loading");
    const weatherRectangle=document.querySelector(".weather-rectangle");
    const form=document.querySelector(".search-form");
    
    const API_KEY="af54d5f1ceebb1647b645ba38c8e1990";
    
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
        errorMsg.style.display="none";
        weatherRectangle.style.display="none";
        loading.style.display="block";
        
        const cityInfo=cityInput.value.trim();
        if(!cityInfo){
        alert("Please enter a city name!");
        loading.style.display="none";
        return;
        }
        
        try{
        const weatherData=await fetchWeather(cityInfo);
        displayWeather(weatherData);
        console.log(weatherData);
        }
        catch(error){
        console.error(error);
        showError(error.message);
        }
        finally{
        loading.style.display="none";
        }
    });
    
    async function fetchWeather(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response=await fetch(url);
        console.log("Response:",response);
        
        if(!response.ok){
        throw new Error("City not found!");
        }
        const data=await response.json();
        return data;
    }
    
    function displayWeather(weatherData){
        const {name,main,weather,wind}=weatherData;
        console.log(weatherData);
        cityDisplay.textContent=name;
        mainTemp.textContent=(main.temp-273.15).toFixed(2)+"°C";
        maxTemp.textContent=(main.temp_max-273.15).toFixed(2)+"°C";
        minTemp.textContent=(main.temp_min-273.15).toFixed(2)+"°C";
        feelsLike.textContent=(main.feels_like-273.15).toFixed(2)+"°C";
        descContent.textContent=weather[0].description;
        windSpeed.textContent=`${wind.speed} m/s (${(wind.speed*3.6).toFixed(2)} km/h)`;
        
        const condition=weather[0].main;
        const gifMapping={
        Clear:"./sunny.mp4",
        Clouds:"./cloudy.mp4",
        Rain:"./rainn.mp4",
        Snow:"./snow.mp4",
        Drizzle:"./drizzle.mp4",
        Thunderstorm:"./thunderstorm.mp4",
        default:"./haze.mp4"
        };
        weatherGif.src=gifMapping[condition]||gifMapping.default;
        weatherRectangle.style.display="block";
    }
    
    function showError(message){
        errorMsg.textContent=message;
        errorMsg.style.display="block";
    }
    });