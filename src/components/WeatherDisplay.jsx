// src/components/WeatherDisplay.jsx

import React from "react";
import { convertToFahrenheit } from "../utils/convert-temp.js";
import ToggleSwitch from "./ToggleSwitch"; // Import the new component
import "../styles/weather-display.css";

// WeatherDisplay.jsx
// Displays weather information fetched from the API.
// Props:
// - data: weather data object returned from fetchWeather
// - loading: boolean, true while fetching data
// - error: string, error message if fetching fails
// - unit: string, the current temperature unit ('C' or 'F')
// - toggleUnit: function, to change the unit
export default function WeatherDisplay({ data, loading, error, unit, toggleUnit }) {

  // Show a loading indicator while the API request is in progress
  if (loading) return <p>Loading...</p>;

  // Display any error messages returned from the API or fetch
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Placeholder message when no city has been entered yet
  if (!data) return <p>Brrr... type a city so I can waddle over and check the weather!
    <p className="weather-emojis"> 🌞 🌧️ ❄️ ☁️ </p>
  </p>;

  // Get the temperature to display based on the current unit
  const displayedTemp = unit === 'C'
    ? Math.round(data.main.temp)
    : Math.round(convertToFahrenheit(data.main.temp));


  // Main UI showing weather details
  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p>Temperature: {displayedTemp} °{unit}</p>
      <p>Humidity: {data.main.humidity} %</p>
      <p>Wind speed: {data.wind.speed} m/s</p>
      <p>Weather: {data.weather[0].description}</p>
      <ToggleSwitch unit={unit} toggleUnit={toggleUnit} />
    </div>
  );
}
