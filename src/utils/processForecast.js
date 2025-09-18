// src/utils/processForecast.js

/**
 * Process raw forecast data from OpenWeatherMap 5-day/3-hour API.
 * Groups data by day and computes daily min, max, and a representative weather description.
 *
 * @param {object} forecastData Raw JSON from /forecast endpoint
 * @returns {Array} Array of daily forecasts [{ date, min, max, description }]
 */
export function processForecast(forecastData) {
    if (!forecastData || !forecastData.list) return [];
  
    const days = {};
  
    forecastData.list.forEach((entry) => {
      const date = entry.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
      const temp = entry.main.temp;
      const description = entry.weather[0].description;
  
      if (!days[date]) {
        days[date] = {
          temps: [],
          descriptions: [],
        };
      }
  
      days[date].temps.push(temp);
      days[date].descriptions.push(description);
    });
  
    return Object.entries(days).map(([date, data]) => {
      const min = Math.min(...data.temps);
      const max = Math.max(...data.temps);
  
      // Pick the most common description for the day
      const descCounts = {};
      data.descriptions.forEach((desc) => {
        descCounts[desc] = (descCounts[desc] || 0) + 1;
      });
      const description = Object.keys(descCounts).reduce((a, b) =>
        descCounts[a] > descCounts[b] ? a : b
      );
  
      return {
        date,
        min,
        max,
        description,
      };
    });
  }
  