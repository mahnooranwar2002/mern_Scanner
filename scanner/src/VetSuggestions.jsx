import React, { useState, useEffect } from 'react';

function VetSuggestions() {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locations, setLocations] = useState([
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' }
  ]);

  useEffect(() => {
    if (location) {
      // yeh data fetch karne ke liye API call kar sakte hain
      const data = [
        { id: 1, name: 'Dr. John', location: 'New York' },
        { id: 2, name: 'Dr. Jane', location: 'Los Angeles' },
        { id: 3, name: 'Dr. Bob', location: 'New York' }
      ];
      const filteredData = data.filter((item) => item.location === location);
      setSuggestions(filteredData);
    } else {
      setSuggestions([]);
    }
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <select value={location} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {locations.map((item) => (
          <option key={item.id} value={item.name}>{item.name}</option>
        ))}
      </select>
      <ul>
        {suggestions.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default VetSuggestions;
