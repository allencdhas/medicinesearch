import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md opacity-550">
      <div className="flex items-center gap-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">QMeds</button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">QMeds <span className="text-xs text-gray-500">BETA</span></button>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">Add Medicines</button>
        <label className="flex items-center gap-2">
          <span>Qoz</span>
          <input type="checkbox" className="toggle-input" />
        </label>
        <button className="text-gray-700">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
