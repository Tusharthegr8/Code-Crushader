import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Glimpses from "./components/Glimpses";
import Footer from "./components/Footer";
import MonumentScanner from "./components/MonumentScanner";

const App = () => {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div 
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/637/26/420/taj-mahal-india-wallpaper-preview.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Discover the Untold Stories of History
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-white drop-shadow-lg">
            Scan any monument and unveil its rich past through engaging videos.
          </p>
          <button
            onClick={() => setShowScanner(true)}
            className="bg-yellow-500 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Scan Monument
          </button>
        </div>
      </div>

      {/* Show scanner when button is clicked */}
      {showScanner && <MonumentScanner onClose={() => setShowScanner(false)} />}

      <div className="bg-gray-900 text-white">
        <Features />
      </div>
      
      <div className="bg-gray-800 text-white">
        <Glimpses />
      </div>

      <Footer />
    </div>
  );
};

export default App;
