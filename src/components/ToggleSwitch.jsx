// src/components/ToggleSwitch.jsx

import React from 'react';
import '../styles/toggle-switch.css'; // We'll create this file next

export default function ToggleSwitch({ unit, toggleUnit }) {
  return (
    <div className="toggle-switch-container">
      <span className="unit-label">°C</span>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={unit === 'F'}
          onChange={toggleUnit}
        />
        <span className="slider round"></span>
      </label>
      <span className="unit-label">°F</span>
    </div>
  );
}