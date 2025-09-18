import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay"
import { fetchWeather, fetchForecast } from "./utils/api";

// App.jsx
// Main application component that manages state and coordinates SearchBar and WeatherDisplay
export default function App() {
  // Controlled input for the city name
  const [city, setCity] = useState("");

  // Holds the weather data returned from the API
  const [weatherData, setWeatherData] = useState(null);

  // State for forecast data
  const [forecastData, setForecastData] = useState(null);

  // Loading state while fetching data
  const [loading, setLoading] = useState(false);

  // Holds any error messages from API failures
  const [error, setError] = useState(null);

  // Tracks which temperature unit the app is displaying ('C' or 'F')
  const [unit, setUnit] = useState('C'); 

  // Read API key from environment variables (Vite .env)
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Called by SearchBar when user submits a city
  const handleSearch = async (searchCity) => {
    if (!searchCity) return; // Ignore empty searches

    setLoading(true);   // Show loading indicator
    setError(null);     // Clear previous errors

    try {
      // Fetch current weather from API
      const data = await fetchWeather(searchCity, API_KEY);
      setWeatherData(data); // Update state for WeatherDisplay
    
      // Fetch 5-day forecast
      const forecast = await fetchForecast(searchCity, API_KEY);
      setForecastData(forecast);

    } catch (err) {
      // Capture and display any errors
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  // Function to toggle Toggle between Celsius and Fahrenheit when user interacts with switch
  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div>
      <h1>Weather Penguin</h1>
      <h2>for penguins... and people</h2>
      {/* User input component */}
      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />

      {/* Weather info display */}
      <WeatherDisplay
        data={weatherData}
        loading={loading}
        error={error}
        // Pass the unit state and the toggle function as props
        unit={unit} 
        toggleUnit={toggleUnit}
      />

      {/* Forecast info display */}
      <ForecastDisplay
        data={forecastData}
        loading={loading}
        error={error}
        unit={unit}
      />
      
    </div>
  );
}
