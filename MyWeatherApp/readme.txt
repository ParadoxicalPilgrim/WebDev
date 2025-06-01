# 🌤 Weather Fetch  
**A simple weather application that fetches real-time weather data for any city.**

## 🔍 Project Overview  
"**Weather Fetch**" is a web-based weather application that uses the [OpenWeatherMap API](https://openweathermap.org/api)  to provide real-time weather information for any city. The app displays temperature, wind speed, and weather conditions, with dynamic video backgrounds based on the current weather.

---

## 🎯 Features  
1. **Live Weather Data**:  
   - Current temperature (in °C), feels-like temperature, max/min temperatures.  
   - Wind speed (in m/s and km/h).  
   - Weather description (e.g., "clear sky", "light rain").  

2. **Dynamic UI**:  
   - Video backgrounds change based on weather conditions (e.g., sunny, cloudy, rainy).  
   - Responsive and visually appealing design with modern CSS styling.  

3. **Error Handling**:  
   - Input validation for empty city names.  
   - Error messages for invalid cities or API failures.  

4. **Loading State**:  
   - A loading spinner appears while fetching weather data.  

---

## 🛠️ Technologies Used  
- **HTML**: Structure of the web page.  
- **CSS**: Styling with animations and responsive layout.  
- **JavaScript**: DOM manipulation, API calls, and dynamic updates.  
- **OpenWeatherMap API**: For fetching weather data.  

---

## 📦 Requirements  
1. **OpenWeatherMap API Key**  
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api).   
   - Replace the placeholder `API_KEY` in `myWeather.js` with your actual key.  

2. **Video Files**  
   - Ensure the following video files are present in the same directory as `myWeather.js`:  
     - `sunny.mp4`  
     - `cloudy.mp4`  
     - `rainn.mp4`  
     - `snow.mp4`  
     - `drizzle.mp4`  
     - `thunderstorm.mp4`  
     - `haze.mp4`  

---

## 🚀 How to Use  
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/weather-fetch.git 
   cd weather-fetch


weather-fetch/
│
├── index.html          # HTML structure
├── myWeather.css       # Styling and animations
├── myWeather.js        # JavaScript logic and API calls
├── sunny.mp4           # Weather-specific videos
├── cloudy.mp4
├── rainn.mp4
├── snow.mp4
├── drizzle.mp4
├── thunderstorm.mp4
└── haze.mp4