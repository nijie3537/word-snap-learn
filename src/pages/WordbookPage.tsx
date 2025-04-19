
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const WordbookPage = () => {
  const navigate = useNavigate();
  
  // Mock data
  const [words] = useState([
    {
      id: 1,
      word: "Radish",
      translation: "萝卜",
      date: "2 days ago",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
    },
    {
      id: 2,
      word: "Coriander",
      translation: "香菜",
      date: "3 days ago",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
    },
    {
      id: 3,
      word: "Mascara",
      translation: "睫毛膏",
      date: "1 week ago",
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png"
    },
    {
      id: 4,
      word: "Foundation",
      translation: "粉底液",
      date: "2 weeks ago",
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png"
    }
  ]);
  
  const [collections] = useState([
    {
      id: 1,
      name: "Vegetables",
      count: 8,
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png"
    },
    {
      id: 2,
      name: "Makeup",
      count: 12,
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png"
    },
    {
      id: 3,
      name: "Coffee Items",
      count: 6,
      image: "/lovable-uploads/3972fc6f-677c-48b1-8cdf-257e78b7988d.png"
    }
  ]);

  return (
    <div className="min-h-screen bg-wordsnap-bg-light pb-20">
      {/* Header */}
      <div className="bg-wordsnap-primary-green pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold">My Wordbook</h1>
      </div>
      
      <div className="p-4">
        <Tabs defaultValue="words" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="words">Single Words</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="words" className="space-y-3">
            {words.map((word) => (
              <motion.div
                key={word.id}
                className="bg-white rounded-xl p-3 shadow-sm flex items-center"
                whileHover={{ x: 5 }}
                onClick={() => navigate(`/word/${word.word.toLowerCase()}`)}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                  <img 
                    src={word.image} 
                    alt={word.word}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-medium">{word.word}</h3>
                  <p className="text-sm text-gray-600">{word.translation}</p>
                  <p className="text-xs text-gray-400">Added {word.date}</p>
                </div>
              </motion.div>
            ))}
          </TabsContent>
          
          <TabsContent value="collections">
            <div className="grid grid-cols-2 gap-3">
              {collections.map((collection) => (
                <motion.div
                  key={collection.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                  whileHover={{ y: -3 }}
                >
                  <div className="h-32 bg-gray-100">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">{collection.name}</h3>
                    <p className="text-xs text-gray-600">{collection.count} words</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="categories">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-center text-gray-500">Categories are automatically generated from your saved words</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="bg-wordsnap-bg-light px-3 py-1 rounded-full text-sm">Kitchen Tools</span>
                <span className="bg-wordsnap-bg-light px-3 py-1 rounded-full text-sm">Fruits</span>
                <span className="bg-wordsnap-bg-light px-3 py-1 rounded-full text-sm">Vegetables</span>
                <span className="bg-wordsnap-bg-light px-3 py-1 rounded-full text-sm">Cosmetics</span>
                <span className="bg-wordsnap-bg-light px-3 py-1 rounded-full text-sm">Beverages</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WordbookPage;
