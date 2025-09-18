# Weather Penguin

A simple React weather forecasting app built with Vite.

## Overview
This app allows users to search for current weather conditions in a specific location and view a forecast for upcoming days. It demonstrates a clean React project structure, reusable components, and modular CSS.

## Features
- Search for current weather by city
- Display current weather details (temperature, humidity, wind, condition)
- Toggle between Celsius (°C) and Fahrenheit (°F)
- View a 5-day forecast (midday values)
- Responsive design for desktop and mobile
- Modular and scalable project structure

## Project Structure

1. Root folder: `weather-penguin/` (kebab-case)
2. Public assets:  
   - `logo.png` → app favicon  
3. Source code (`src/`)
    - `components/` → PascalCase (ForecastDisplay.jsx, SearchBar.jsx, WeatherDisplay.jsx, ToggleSwitch.jsx)
    - `pages/` → PascalCase (ForecastPage.jsx, Home.jsx)
    - `styles/` → kebab-case (forecast-display.css, global.css, search-bar.css, toggle-switch.css, weather-display.css)
    - `utils/` → kebab-case (api.js, convert-temp.js, processForecast.js)
    - `App.jsx` → main app component
    - `main.jsx` → React entry point
4. Root config files: `.env`, `.gitignore`, `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.js`, `index.html`, `README.md`

## Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```
2. Install dependencies:

```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the app in your browser at http://localhost:5173/

## Technologies Used

- React
- Vite
- ESLint
- CSS (modular component styles)
- Fetch API (for weather data)

## Future Improvements

- Add hourly and weekly forecast cards
- Integrate weather icons for different conditions
- Add animations and playful effects (e.g., penguin wobble 🐧)
- Add routing for multiple pages



