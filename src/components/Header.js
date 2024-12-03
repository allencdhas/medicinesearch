import React from "react";

const Header = () => {
  return (
    <header className="text-center py-10">
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-4">
          <div className="bg-white rounded-full p-6">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-green-500 to-yellow-400">Q</div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-4">QMeds</h1>
      <p className="text-gray-600">The search engine for your Medicines</p>
    </header>
  );
};

export default Header;
