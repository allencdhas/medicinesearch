import React, { useState } from "react";

const SearchBar = () => {
  // State management
  const [showTable, setShowTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Event handlers
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a search term");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setShowTable(false);
      
      const response = await fetch(`http://localhost:5000/api/medicines/search?term=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      setFilteredMedicines(data);
      setShowTable(true);
    } catch (err) {
      setError("Failed to fetch medicines. Please try again later.");
      setFilteredMedicines([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Render components
  const renderSearchInput = () => (
    <div className="mt-8 mx-auto w-4/5 max-w-3xl">
      <div className="rounded-full flex items-center px-4 py-2 bg-white shadow-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full bg-transparent outline-none text-gray-700 px-4 py-2"
          placeholder="Search for medicines..."
          disabled={isLoading}
        />
        <button 
          className={`px-4 py-2 rounded-full ${
            isLoading 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? '⌛' : '🔍'}
        </button>
      </div>
    </div>
  );

  const renderTable = () => (
    <div className="mt-8 mx-auto w-4/5 max-w-3xl overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Composition</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Usage</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Dosage</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicines.map((medicine, index) => (
            <tr 
              key={index} 
              className="border-t hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-sm text-gray-900">{medicine.name}</td>
              <td className="px-4 py-3 text-sm text-gray-900">{medicine.composition}</td>
              <td className="px-4 py-3 text-sm text-gray-900">{medicine.usage}</td>
              <td className="px-4 py-3 text-sm text-gray-900">{medicine.dosage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="relative">
      {renderSearchInput()}
      {renderTable()}
    </div>
  );
};

export default SearchBar;
