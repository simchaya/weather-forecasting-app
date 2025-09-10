<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# Weather App

A simple React weather forecasting app built with Vite.

## Overview
This app allows users to search for current weather conditions in a specific location and view a forecast for upcoming days. It demonstrates a clean React project structure, reusable components, and modular CSS.

## Features
- Search for current weather by city
- Display current weather details (temperature, condition, icon)
- View future forecast (hourly/daily)
- Responsive design for desktop and mobile
- Modular and scalable project structure

## Project Structure

weather-forecasting-app/                   ← project root (kebab-case)
│
├─ public/                     ← static assets (logos etc.)
│    ├─ react.svg
│    └─ vite.svg            
│
├─ src/                        ← all source code
│    ├─ components/            ← reusable UI components (PascalCase)
│    │    ├─ Forecast.jsx
│    │    ├─ SearchBar.jsx
│    │    └─ WeatherDisplay.jsx
│    │
│    ├─ pages/                 ← full-page views (PascalCase)
│    │    ├─ ForecastPage.jsx
│    │    └─ Home.jsx
│    │
│    ├─ styles/                ← CSS files (kebab-case)
│    │    ├─ forecast.css
│    │    ├─ global.css
│    │    └─ weather-display.css
│    │
│    ├─ utils/                 ← helper functions (kebab-case)
│    │    └─ api.js
│    │    ├─ convert-temp.js
│    │    └─ format-date.js
│    │
│    ├─ App.jsx                ← main app component (PascalCase)
│    └─ main.jsx               ← React entry point
│
├─ .gitignore                  ← files to ignore in git
├─ package.json                ← npm dependencies & scripts
├─ package-lock.json           ← exact versions of dependencies
├─ vite.config.js              ← Vite configuration
├─ eslint.config.js            ← linter configuration
├─ index.html                  ← base HTML template
└─ README.md                   ← project documentation

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
- Add temperature unit toggle (Celsius ↔ Fahrenheit)
- Optionally migrate to TypeScript for type safety
- Add routing for multiple pages