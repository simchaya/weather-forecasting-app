// src/components/ForecastDisplay.jsx

import React from "react";
import { convertToFahrenheit } from "../utils/convert-temp.js";
import "../styles/forecast-display.css"

// ForecastDisplay.jsx
// Displays a 5-day forecast, showing one value per day (midday approx).
// Props:
// - data: raw forecast data from OpenWeatherMap
// - unit: 'C' or 'F'
export default function ForecastDisplay({ data, unit }) {
  if (!data) return null;

  // Group forecast list (3-hour steps) into daily buckets
  const daily = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
    // Pick the 12:00:00 entry if available, otherwise fallback first one
    if (item.dt_txt.includes("12:00:00")) {
      daily[date] = item;
    } else if (!daily[date]) {
      daily[date] = item;
    }
  });

  // Convert object to array of days
  const days = Object.values(daily).slice(0, 5);

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <ul>
        {days.map((day, index) => {
          const tempC = day.main.temp;
          const temp = unit === "C" ? tempC : convertToFahrenheit(tempC).toFixed(1);
          const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });

          return (
            <li key={index}>
              <strong>{date}</strong> {temp}°{unit}, {day.weather[0].description}
            </li>
          );
        })}
      </ul>
    </div>

  );
}
