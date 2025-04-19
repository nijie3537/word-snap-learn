import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Save, Zap, ZapOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CameraPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [flashOn, setFlashOn] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const [detectedObjects] = useState([
    {
      name: "Coffee Machine",
      pronunciation: "/ˈkɒfi məˈʃiːn/",
      translation: "咖啡机",
      position: { top: "15%", left: "35%" }
    },
    {
      name: "Coffee Grinder",
      pronunciation: "/ˈkɒfi ˈɡraɪndə/",
      translation: "咖啡研磨机",
      position: { top: "30%", left: "70%" }
    },
    {
      name: "Milk Pitcher",
      pronunciation: "/mɪlk ˈpɪtʃə/",
      translation: "奶壶",
      position: { top: "60%", left: "10%" }
    },
    {
      name: "Portafilter",
      pronunciation: "/ˈpɔːtəfɪltə/",
      translation: "咖啡滤器",
      position: { top: "85%", left: "20%" }
    },
    {
      name: "Coffee Tamper",
      pronunciation: "/ˈkɒfi ˈtæmpə/",
      translation: "咖啡压粉器",
      position: { top: "85%", left: "75%" }
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

    if (!isDemoMode && !showPreview) {
      startCamera();
    }

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isDemoMode, showPreview]);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const toggleDemo = () => {
    setIsDemoMode(!isDemoMode);
    setShowPreview(false);
  };

  const handleCapture = () => {
    if (!isDemoMode && videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setCapturedImage(canvas.toDataURL('image/jpeg'));
        setShowPreview(true);
      }
    } else {
      setShowPreview(true);
    }
  };

  const playPronunciation = (word: string) => {
    console.log(`Playing pronunciation for: ${word}`);
  };

  const handleAddWord = (objectName: string) => {
    navigate(`/word/${objectName.toLowerCase()}`);
  };

  const handleSaveScene = () => {
    console.log("Saving current scene with detected objects");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="absolute top-6 inset-x-0 px-6 flex justify-between items-center z-10">
        <button 
          onClick={handleBack}
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

      <div className="flex-1 relative overflow-hidden flex items-center justify-center mt-16">
        {!isDemoMode && !showPreview && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        )}
        
        {isDemoMode && (
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png"
              alt="Demo scene"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            
            {detectedObjects.map((object, index) => (
              <div
                key={index}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: object.position.top, left: object.position.left }}
              >
                <div className="bg-[#F2F5E4] bg-opacity-70 rounded-lg p-1.5 shadow-lg max-w-[160px] whitespace-nowrap">
                  <h3 className="text-xs font-medium text-gray-800 whitespace-nowrap">
                    {object.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5 whitespace-nowrap">
                    <span className="text-[10px] text-gray-600 whitespace-nowrap">{object.pronunciation}</span>
                    <button 
                      onClick={() => playPronunciation(object.name)}
                      className="p-0.5 hover:text-wordsnap-primary-green"
                    >
                      <Volume2 className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] text-gray-700">{object.translation}</span>
                    <button 
                      onClick={() => handleAddWord(object.name)}
                      className="ml-1 w-3.5 h-3.5 flex items-center justify-center rounded-full bg-wordsnap-primary-green text-white text-[10px]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {showPreview && capturedImage && (
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <img src={capturedImage} alt="Captured" className="max-w-full max-h-full object-contain" />
          </div>
        )}
      </div>

      <div className="bg-black px-6 pb-6 pt-2">
        <div className="flex justify-between items-center px-8">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <Upload className="w-5 h-5 text-white" />
          </button>
          
          <button 
            onClick={handleCapture}
            className="w-16 h-16 rounded-full bg-white border-4 border-gray-700"
          />
          
          <button 
            onClick={handleSaveScene}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <Save className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
