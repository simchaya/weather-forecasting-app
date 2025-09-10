import React from "react";

export default function SearchBar({ city, setCity, handleSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}
