import React from "react";

export default function WeatherDisplay({ data, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>Enter a city to see the weather</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Humidity: {data.main.humidity} %</p>
      <p>Wind speed: {data.wind.speed} m/s</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
}
