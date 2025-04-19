
import React, { useState } from 'react';
import CameraPreview from '../components/CameraPreview';
import DetectedObjects from '../components/DetectedObjects';

const CameraPage = () => {
  const [detectedObjects] = useState([
    {
      name: "Coffee Machine",
      pronunciation: "/ˈkɒfi məˈʃiːn/",
      translation: "咖啡机",
      position: { top: "20%", left: "35%" }
    },
    {
      name: "Coffee Grinder",
      pronunciation: "/ˈkɒfi ˈɡraɪndə/",
      translation: "咖啡研磨机",
      position: { top: "25%", left: "80%" }
    },
    {
      name: "Milk Pitcher",
      pronunciation: "/mɪlk ˈpɪtʃə/",
      translation: "奶壶",
      position: { top: "55%", left: "25%" }
    },
    {
      name: "Portafilter",
      pronunciation: "/ˈpɔːtəfɪltə/",
      translation: "咖啡滤器",
      position: { top: "80%", left: "20%" }
    },
    {
      name: "Coffee Tamper",
      pronunciation: "/ˈkɒfi ˈtæmpə/",
      translation: "咖啡压粉器",
      position: { top: "85%", left: "65%" }
    }
  ]);

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="relative w-full h-full bg-black">
        <CameraPreview />
        <DetectedObjects objects={detectedObjects} />
      </div>
    </div>
  );
};

export default CameraPage;
