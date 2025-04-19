
import React, { useState } from 'react';

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
      {/* Mock camera view */}
      <div className="relative w-full h-full bg-black">
        {/* Coffee shop image would go here */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <p>Camera preview would show here</p>
        </div>

        {/* Word blocks */}
        {detectedObjects.map((object, index) => (
          <div
            key={index}
            className="absolute bg-white bg-opacity-80 p-2 rounded-lg shadow-lg"
            style={{
              top: object.position.top,
              left: object.position.left,
              maxWidth: "200px"
            }}
          >
            <p className="font-bold whitespace-nowrap">{object.name}</p>
            <p className="text-gray-600 text-sm whitespace-nowrap">{object.pronunciation}</p>
            <p className="text-blue-600">{object.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraPage;
