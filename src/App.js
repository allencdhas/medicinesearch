import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f35_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f35_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)]">
          <div className=" top-0 z-[-2] h-screen w-screen  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      <Navbar />
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
