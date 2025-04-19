
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Volume } from "lucide-react";
import { motion } from "framer-motion";
import { removeBackground, loadImage } from "../utils/imageUtils";

// Mock word data mapping
const wordDatabase = {
  "coffee machine": {
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
    image: '/lovable-uploads/photo-1498050108023-c5249f4df085.jpg',
    reference: "A modern coffee machine"
  },
  "monkey": {
    phonetic: "/ˈmʌŋki/",
    translation: "猴子 (Hóuzi)",
    memoryHack: "Picture a playful creature swinging from tree to tree, just like the word 'monkey' bounces off your tongue!",
    examples: [
      {
        text: "The monkey peeled the banana with remarkable dexterity.",
        source: "Longman Dictionary"
      },
      {
        text: "A group of monkeys lived in harmony in the ancient temple.",
        source: "Oxford Dictionary"
      }
    ],
    image: '/lovable-uploads/photo-1501286353178-1ec881214838.jpg',
    reference: "A monkey holding a banana"
  },
  "kitten": {
    phonetic: "/ˈkɪtn/",
    translation: "小猫 (Xiǎomāo)",
    memoryHack: "Think of the soft 'kit' sound at the start - as gentle as a kitten's paw!",
    examples: [
      {
        text: "The kitten curled up in a ball of fur on the windowsill.",
        source: "Cambridge Dictionary"
      },
      {
        text: "She adopted a playful kitten from the local shelter.",
        source: "Merriam-Webster"
      }
    ],
    image: '/lovable-uploads/photo-1535268647677-300dbf3d78d1.jpg',
    reference: "An adorable grey tabby kitten"
  }
};

const WordDetailPage = () => {
  const { word } = useParams<{ word: string }>();
  const navigate = useNavigate();
  const [playingAudio, setPlayingAudio] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  // Get word data from our database
  const wordData = word ? wordDatabase[word.toLowerCase()] || wordDatabase["coffee machine"] : wordDatabase["coffee machine"];

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

  return (
    <div className="min-h-screen bg-wordsnap-bg-light">
      {/* Header */}
      <div className="bg-wordsnap-primary-green py-4 px-6 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold capitalize">
          {word || "Coffee Machine"}
        </h1>
      </div>

      <div className="p-6">
        {/* Word image */}
        <div className="mb-6 rounded-xl overflow-hidden bg-white shadow-md">
          <img 
            src={processedImage || wordData.image} 
            alt={word || "Coffee Machine"}
            className="w-full h-48 object-contain bg-white"
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
              <h2 className="text-2xl font-bold capitalize">{word || "Coffee Machine"}</h2>
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

