
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  
  // Mock data - would come from an API in a real app
  const [reviewWords] = useState([
    {
      id: 1,
      word: "Radish",
      translation: "萝卜",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
    },
    {
      id: 2,
      word: "Coriander",
      translation: "香菜",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
    },
    {
      id: 3,
      word: "Mascara",
      translation: "睫毛膏",
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png"
    }
  ]);
  
  const [aiSuggestions] = useState([
    {
      id: 1,
      category: "Coffee Tools",
      words: ["Espresso Cup", "Croissant"],
      image: "/lovable-uploads/3972fc6f-677c-48b1-8cdf-257e78b7988d.png"
    },
    {
      id: 2,
      category: "Makeup Items",
      words: ["Foundation", "Eyeshadow Palette"],
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png"
    }
  ]);

  return (
    <div className="min-h-screen bg-wordsnap-bg-light pb-20">
      {/* Header */}
      <div className="bg-wordsnap-primary-green pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold mb-1">Hello!</h1>
        <p className="text-sm">What would you like to learn today?</p>
      </div>
      
      <div className="p-6">
        {/* Review Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Review Today</h2>
          <div className="grid grid-cols-2 gap-3">
            {reviewWords.map((word) => (
              <motion.div
                key={word.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                onClick={() => navigate(`/word/${word.word.toLowerCase()}`)}
              >
                <div className="h-24 bg-gray-100">
                  <img 
                    src={word.image} 
                    alt={word.word}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{word.word}</h3>
                  <p className="text-xs text-gray-600">{word.translation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* AI Suggestions */}
        <section>
          <h2 className="text-lg font-semibold mb-3">AI-Suggested Words</h2>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion) => (
              <motion.div
                key={suggestion.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                whileHover={{ y: -3 }}
              >
                <div className="h-32 bg-gray-100">
                  <img 
                    src={suggestion.image} 
                    alt={suggestion.category}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{suggestion.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestion.words.map((word, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-wordsnap-bg-light px-2 py-1 rounded-full"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
