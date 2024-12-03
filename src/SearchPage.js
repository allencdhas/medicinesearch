import React, { useState } from 'react';
import axios from 'axios';
import './SearchPage.css';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/medicines/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching medicines:', error);
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter medicine name..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      
      <div className="results-container">
        {results.map((medicine) => (
          <div key={medicine._id} className="medicine-card">
            <h3>{medicine.name}</h3>
            <p><strong>Composition:</strong> {medicine.composition}</p>
            <p><strong>Usage:</strong> {medicine.usage}</p>
            <p><strong>Dosage:</strong> {medicine.dosage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;