import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import TempleModel from "./TempleModel"; 

const MonumentScanner = ({ onClose }) => {
  const webcamRef = useRef(null);
  const [scannedModel, setScannedModel] = useState(null);

 
  const modelMapping = {
    "Temple Nepal": "/models/TempleNepal.glb"
  };

  const handleScan = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const recognizedMonument = await recognizeMonument(imageSrc);

    if (recognizedMonument && modelMapping[recognizedMonument]) {
      setScannedModel(modelMapping[recognizedMonument]);
    } else {
      alert("Monument not recognized! Try again.");
    }
  };


  const recognizeMonument = async (image) => {
    console.log("Image sent for recognition:", image);
    return "Temple Nepal"; // Hardcoded for testing
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-lg"
        >
          Close
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-white">
          {scannedModel ? "Recognized Monument Model" : "Scan a Monument"}
        </h2>

        {/* Camera or 3D Model View */}
        {!scannedModel ? (
          <div className="w-full max-w-2xl">
            <Webcam ref={webcamRef} screenshotFormat="image/png" className="w-full rounded-lg" />
            <button
              onClick={handleScan}
              className="mt-6 w-full bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
            >
              Capture & Recognize
            </button>
          </div>
        ) : (
          <div className="w-full h-[80vh] flex justify-center items-center bg-gray-900 rounded-lg">
            <TempleModel modelPath={scannedModel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MonumentScanner;
