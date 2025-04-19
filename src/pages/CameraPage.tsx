
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Save, Zap, ZapOff, Camera as CameraIcon, Volume2 } from "lucide-react";

const CameraPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [flashOn, setFlashOn] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [detectedObjects, setDetectedObjects] = useState([
    {
      name: "Coffee Grinder",
      pronunciation: "/ˈkɒfi ˈɡraɪndə/",
      translation: "咖啡研磨机",
      position: { top: "20%", left: "25%" }
    },
    {
      name: "Espresso Machine",
      pronunciation: "/eˈspresəʊ məˈʃiːn/",
      translation: "咖啡机",
      position: { top: "35%", left: "55%" }
    },
    {
      name: "Iced Coffee",
      pronunciation: "/aɪst ˈkɒfi/",
      translation: "冰咖啡",
      position: { top: "60%", left: "30%" }
    },
    {
      name: "Chocolate Cake",
      pronunciation: "/ˈtʃɒklət keɪk/",
      translation: "巧克力蛋糕",
      position: { top: "70%", left: "65%" }
    }
  ]);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    if (!isDemoMode) {
      startCamera();
    }

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isDemoMode]);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const toggleDemo = () => {
    setIsDemoMode(!isDemoMode);
    setShowPreview(false);
  };

  const handleCapture = () => {
    setShowPreview(true);
  };

  const playPronunciation = (word: string) => {
    // Here you would integrate with Youdao Dictionary API
    console.log(`Playing pronunciation for: ${word}`);
  };

  const handleAddWord = (objectName: string) => {
    navigate(`/word/${objectName.toLowerCase()}`);
  };

  const handleSaveScene = () => {
    // Here you would implement the save functionality
    console.log("Saving current scene with detected objects");
  };

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Camera view */}
      <div className="flex-1 bg-gray-900 relative">
        {!isDemoMode && !showPreview && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        
        {isDemoMode && (
          // Demo mode with object detection
          <div className="w-full h-full relative">
            <img 
              src="/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
              alt="Demo scene"
              className="w-full h-full object-cover"
            />
            
            {/* Object overlays */}
            {detectedObjects.map((object, index) => (
              <div
                key={index}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: object.position.top, left: object.position.left }}
              >
                <div className="bg-[#F2F5E4] bg-opacity-90 rounded-xl p-3 shadow-lg">
                  <h3 className="text-base font-medium text-gray-800">
                    {object.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-600">{object.pronunciation}</span>
                    <button 
                      onClick={() => playPronunciation(object.name)}
                      className="p-1 hover:text-wordsnap-primary-green"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-700">{object.translation}</span>
                    <button 
                      onClick={() => handleAddWord(object.name)}
                      className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-wordsnap-primary-green text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {showPreview && (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white">Preview mode</div>
          </div>
        )}
      </div>

      {/* Camera controls */}
      <div className="absolute top-6 left-0 right-0 px-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={toggleDemo}
          className="px-4 py-2 rounded-full bg-black bg-opacity-50 text-white"
        >
          Demo
        </button>
        
        <button 
          onClick={toggleFlash}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          {flashOn ? (
            <Zap className="w-6 h-6 text-white" />
          ) : (
            <ZapOff className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Bottom controls */}
      <div className="bg-black px-6 pb-10 pt-4">
        <div className="flex justify-between items-center px-8">
          <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Upload className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={handleCapture}
            className="w-20 h-20 rounded-full bg-white border-4 border-gray-700"
          />
          
          <button 
            onClick={handleSaveScene}
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <Save className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
