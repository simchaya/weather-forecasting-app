import React from "react";

// SearchBar.jsx
// Simple controlled component for entering a city name and triggering a search.
// Props:
// - city: current value of the input (state from parent)
// - setCity: function to update input value
// - handleSearch: function to fetch weather data for the entered city
export default function SearchBar({ city, setCity, handleSearch }) {
  
  // Called when the form is submitted
  // Prevents default page reload and calls the parent handler with the current city
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city} // Controlled input reflects state
        onChange={(e) => setCity(e.target.value)} // Update state on user typing
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}
