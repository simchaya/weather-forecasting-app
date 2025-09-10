// Utility function to fetch weather data
export async function fetchWeather(city, apiKey) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      return await response.json();
    } catch (err) {
      throw err;
    }
  }
  