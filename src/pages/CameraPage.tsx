
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, ZapOff, Camera } from "lucide-react";

const CameraPage = () => {
  const navigate = useNavigate();
  const [flashOn, setFlashOn] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [detectedWord, setDetectedWord] = useState("Radish");

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const handleCapture = () => {
    // Simulate capturing an image
    setShowPreview(true);
  };

  const handleAddWord = () => {
    navigate(`/word/${detectedWord.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Camera view (simulated) */}
      <div className="flex-1 bg-gray-900 relative">
        {!showPreview ? (
          // Camera viewfinder
          <div className="w-full h-full flex items-center justify-center">
            <Camera className="w-20 h-20 text-gray-500 opacity-20" />
          </div>
        ) : (
          // Preview with detected object
          <div className="w-full h-full flex items-center justify-center relative">
            {/* This would be the captured image in a real app */}
            <div className="bg-gray-800 w-full h-full opacity-60 absolute inset-0" />
            
            {/* Word overlay */}
            <div className="z-10 bg-wordsnap-overlay backdrop-blur-sm rounded-xl p-5 w-4/5 max-w-xs">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-white">{detectedWord}</h2>
                <div className="bg-wordsnap-primary-green rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm">🔊</span>
                </div>
              </div>
              
              <div className="text-white text-sm mb-3">
                <p className="text-xs text-gray-300 mb-1">/ˈrædɪʃ/</p>
                <p className="text-white">萝卜 (Luóbo)</p>
              </div>
              
              <button 
                onClick={handleAddWord}
                className="bg-wordsnap-primary-green text-gray-800 py-2 px-4 rounded-lg w-full font-medium flex items-center justify-center"
              >
                <span className="mr-1">+</span> Add to Wordbook
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Camera controls */}
      <div className="bg-black p-6">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={toggleFlash}
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
          >
            {flashOn ? (
              <Zap className="w-6 h-6 text-white" />
            ) : (
              <ZapOff className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        
        {!showPreview ? (
          <div className="flex justify-center">
            <button 
              onClick={handleCapture}
              className="w-16 h-16 rounded-full bg-white border-4 border-gray-700"
            />
          </div>
        ) : (
          <div className="flex justify-around">
            <button 
              onClick={() => setShowPreview(false)}
              className="bg-wordsnap-primary-green text-black py-2 px-6 rounded-full"
            >
              Retake
            </button>
            <button 
              onClick={handleAddWord}
              className="bg-wordsnap-primary-green text-black py-2 px-6 rounded-full"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraPage;
