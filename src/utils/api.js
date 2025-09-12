// api.js
// Utility function to fetch weather data from the OpenWeatherMap API

/**
 * Fetches current weather data for a given city.
 *
 * @param {string} city   - The name of the city to search for.
 * @param {string} apiKey - Your personal OpenWeatherMap API key.
 * @returns {Object}      - The parsed JSON weather data if successful.
 * @throws {Error}        - If the fetch fails (e.g., invalid city or network error).
 */
export async function fetchWeather(city, apiKey) {
  try {
    // Send a GET request to the OpenWeatherMap API
    // q     = city name
    // units = metric system (Celsius)
    // appid = API key for authentication
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    // Check if the response is NOT OK (e.g., city not found, 404 error)
    if (!response.ok) {
      throw new Error("City not found");
    }

    // Convert the raw response into JSON and return it
    return await response.json();

  } catch (err) {
    // Re-throw the error so that the component calling this
    // function can decide how to handle it (e.g., show error message)
    throw err;
  }
}
