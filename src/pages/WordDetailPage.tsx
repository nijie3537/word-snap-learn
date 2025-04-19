
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Volume } from "lucide-react";
import { motion } from "framer-motion";
import { removeBackground, loadImage } from "../utils/imageUtils";

// Mock word data mapping
const wordDatabase = {
  "coffee-machine": {
    phonetic: "/ˈkɒfi məˈʃiːn/",
    translation: "咖啡机 (Kāfēi jī)",
    memoryHack: "Think of it as the magical machine that transforms simple beans into liquid gold - your morning coffee!",
    examples: [
      {
        text: "The coffee machine needs to be cleaned regularly.",
        source: "Cambridge Dictionary"
      },
      {
        text: "She invested in a high-end coffee machine for her café.",
        source: "Collins Dictionary"
      }
    ],
    image: '/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png',
    objectPosition: "top", // Focusing on coffee machine area
    reference: "A modern coffee machine"
  },
  "coffee-grinder": {
    phonetic: "/ˈkɒfi ˈɡraɪndə/",
    translation: "咖啡研磨机 (Kāfēi yánmó jī)",
    memoryHack: "Picture the grinding sound - it's like the machine is speaking the word 'grinder' as it works!",
    examples: [
      {
        text: "A good coffee grinder is essential for fresh coffee.",
        source: "Coffee Magazine"
      },
      {
        text: "He adjusted the coffee grinder to a finer setting.",
        source: "Barista Handbook"
      }
    ],
    image: '/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png',
    objectPosition: "80% 50%", // Focusing on grinder area
    reference: "A professional coffee grinder"
  },
  "milk-pitcher": {
    phonetic: "/mɪlk ˈpɪtʃə/",
    translation: "奶壶 (Nǎi hú)",
    memoryHack: "Think of it as the pitcher that 'pitches' milk into your coffee with perfect precision!",
    examples: [
      {
        text: "The barista swirled the milk in the pitcher to create microfoam.",
        source: "Barista Weekly"
      },
      {
        text: "A stainless steel milk pitcher is preferred for steaming milk.",
        source: "Coffee Academy"
      }
    ],
    image: '/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png',
    objectPosition: "20% 50%", // Focusing on milk pitcher area
    reference: "A stainless steel milk pitcher"
  },
  "portafilter": {
    phonetic: "/ˈpɔːtəfɪltə/",
    translation: "咖啡滤器 (Kāfēi lǜ qì)",
    memoryHack: "Think 'porta' (portable) + 'filter' - it's the handle that carries (ports) the coffee filter!",
    examples: [
      {
        text: "Clean your portafilter after each use for the best coffee taste.",
        source: "Espresso Guide"
      },
      {
        text: "The barista locked the portafilter into the group head.",
        source: "Coffee Training Manual"
      }
    ],
    image: '/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png',
    objectPosition: "20% 80%", // Focusing on portafilter area
    reference: "An espresso machine portafilter"
  },
  "coffee-tamper": {
    phonetic: "/ˈkɒfi ˈtæmpə/",
    translation: "咖啡压粉器 (Kāfēi yā fěn qì)",
    memoryHack: "Remember it 'tamps' (presses down) the coffee - the word sounds like the action it performs!",
    examples: [
      {
        text: "Apply consistent pressure when using the coffee tamper.",
        source: "Barista Basics"
      },
      {
        text: "A good coffee tamper helps create the perfect espresso shot.",
        source: "Coffee Craft Magazine"
      }
    ],
    image: '/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png',
    objectPosition: "80% 80%", // Focusing on tamper area
    reference: "A professional coffee tamper"
  }
};

const WordDetailPage = () => {
  const { word } = useParams<{ word: string }>();
  const navigate = useNavigate();
  const [playingAudio, setPlayingAudio] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  // Get word data from our database
  const wordData = word ? wordDatabase[word] || wordDatabase["coffee-machine"] : wordDatabase["coffee-machine"];

  useEffect(() => {
    const processImage = async () => {
      try {
        // Fetch the image
        const response = await fetch(wordData.image);
        const blob = await response.blob();
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        const processedImageUrl = URL.createObjectURL(processedBlob);
        setProcessedImage(processedImageUrl);
      } catch (error) {
        console.error('Image processing error:', error);
        // Fallback to original image if processing fails
        setProcessedImage(wordData.image);
      }
    };

    processImage();
  }, [word, wordData.image]);

  const playPronunciation = () => {
    setPlayingAudio(true);
    // Simulate audio playing
    setTimeout(() => {
      setPlayingAudio(false);
    }, 2000);
  };

  const handleBack = () => {
    navigate("/home");  // Navigate to home page instead of previous page
  };

  return (
    <div className="min-h-screen bg-wordsnap-bg-light">
      {/* Header */}
      <div className="bg-wordsnap-primary-green py-4 px-6 flex items-center">
        <button onClick={handleBack} className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold capitalize">
          {word?.replace(/-/g, ' ') || "Coffee Machine"}
        </h1>
      </div>

      <div className="p-6">
        {/* Word image */}
        <div className="mb-6 rounded-xl overflow-hidden bg-white shadow-md">
          <img 
            src={processedImage || wordData.image} 
            alt={word?.replace(/-/g, ' ') || "Coffee Machine"}
            className="w-full h-48 object-contain bg-white"
            style={{ objectPosition: wordData.objectPosition || 'center' }}
          />
        </div>

        {/* Word basics */}
        <motion.div 
          className="bg-white rounded-xl p-5 shadow-sm mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-2xl font-bold capitalize">{word?.replace(/-/g, ' ') || "Coffee Machine"}</h2>
              <p className="text-gray-500">{wordData.phonetic}</p>
            </div>
            <button 
              onClick={playPronunciation} 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${playingAudio ? 'bg-wordsnap-primary-green' : 'bg-gray-100'}`}
            >
              <Volume className={`w-5 h-5 ${playingAudio ? 'text-black' : 'text-gray-600'}`} />
            </button>
          </div>
          
          <p className="text-lg mb-4">
            {wordData.translation}
          </p>
          
          <div className="bg-wordsnap-bg-light p-3 rounded-lg">
            <p className="text-sm font-medium">Memory Hack:</p>
            <p className="text-sm text-gray-700">{wordData.memoryHack}</p>
          </div>
        </motion.div>
        
        {/* Examples */}
        <motion.div 
          className="bg-white rounded-xl p-5 shadow-sm mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-3">Examples</h3>
          <ul className="space-y-3">
            {wordData.examples.map((example, index) => (
              <li key={index} className="text-sm">
                <p className="bg-wordsnap-bg-alt p-3 rounded-lg text-gray-700">
                  {example.text}
                </p>
                <p className="text-xs text-gray-500 mt-1 ml-2 italic">
                  Source: {example.source}
                </p>
              </li>
            ))}
          </ul>
          
          <p className="text-xs text-gray-500 mt-4">
            {wordData.reference}
          </p>
        </motion.div>
        
        {/* Practice buttons */}
        <motion.div 
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-wordsnap-primary-green px-6 py-3 rounded-full font-medium">
            Practice With This Word
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WordDetailPage;
