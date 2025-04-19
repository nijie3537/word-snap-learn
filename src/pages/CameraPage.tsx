
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Zap, ZapOff, Camera as CameraIcon } from "lucide-react";

const CameraPage = () => {
  const navigate = useNavigate();
  const [flashOn, setFlashOn] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [detectedObjects, setDetectedObjects] = useState([
    {
      name: "Coffee Grinder",
      pronunciation: "/ˈkɒfi ˈɡraɪndə/",
      translation: "咖啡研磨机",
      position: { top: "15%", left: "15%" }
    },
    {
      name: "Espresso Machine",
      pronunciation: "/eˈspresəʊ məˈʃiːn/",
      translation: "咖啡机",
      position: { top: "15%", left: "45%" }
    },
    {
      name: "Iced Coffee",
      pronunciation: "/aɪst ˈkɒfi/",
      translation: "冰咖啡",
      position: { top: "45%", left: "75%" }
    },
    {
      name: "Chocolate Cake",
      pronunciation: "/ˈtʃɒklət keɪk/",
      translation: "巧克力蛋糕",
      position: { top: "75%", left: "45%" }
    }
  ]);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const handleCapture = () => {
    setShowPreview(true);
  };

  const handleAddWord = (objectName: string) => {
    navigate(`/word/${objectName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Camera view */}
      <div className="flex-1 bg-gray-900 relative">
        {!showPreview ? (
          // Camera viewfinder
          <div className="w-full h-full flex items-center justify-center">
            <CameraIcon className="w-20 h-20 text-gray-500 opacity-20" />
          </div>
        ) : (
          // Preview with detected objects
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="bg-gray-800 w-full h-full opacity-60 absolute inset-0" />
            
            {/* Object overlays */}
            {detectedObjects.map((object, index) => (
              <div
                key={index}
                className="absolute z-10"
                style={{ top: object.position.top, left: object.position.left }}
              >
                <div className="bg-[#F2F5E4] rounded-xl p-4 shadow-lg max-w-[200px]">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {object.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-600">{object.pronunciation}</span>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-wordsnap-primary-green">
                      🔊
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{object.translation}</p>
                  <button 
                    onClick={() => handleAddWord(object.name)}
                    className="bg-wordsnap-primary-green text-black text-sm py-1 px-3 rounded-lg w-full flex items-center justify-center"
                  >
                    + Add to Wordbook
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Camera controls */}
      <div className="bg-black px-6 pb-10 pt-4">
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
          <div className="flex justify-between items-center px-8">
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={handleCapture}
              className="w-20 h-20 rounded-full bg-white border-4 border-gray-700"
            />
            
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <CameraIcon className="w-6 h-6 text-white" />
            </button>
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
              onClick={() => navigate("/wordbook")}
              className="bg-wordsnap-primary-green text-black py-2 px-6 rounded-full"
            >
              Save All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraPage;
