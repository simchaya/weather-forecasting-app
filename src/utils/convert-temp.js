// src/utils/convert-temp.js

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param {number} celsius The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
export function convertToFahrenheit(celsius) {
  // Formula: (C * 9/5) + 32
  return (celsius * 9 / 5) + 32;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
export function convertToCelsius(fahrenheit) {
  // Formula: (F - 32) * 5/9
  return (fahrenheit - 32) * 5 / 9;
}