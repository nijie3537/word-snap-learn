
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Volume } from "lucide-react";
import { motion } from "framer-motion";

const WordDetailPage = () => {
  const { word } = useParams<{ word: string }>();
  const navigate = useNavigate();
  const [playingAudio, setPlayingAudio] = useState(false);

  // Mock data - would be fetched from an API in a real app
  const wordData = {
    word: word || "radish",
    phonetic: "/ˈrædɪʃ/",
    translation: "萝卜 (Luóbo)",
    memoryHack: "Think of radish as a 'red dish' - many radishes have a reddish color!",
    examples: [
      "Add radish to salads for a peppery crunch.",
      "Radish is often used in Asian cuisines for its crisp texture."
    ],
    media: {
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png",
      reference: "Movie Reference: Ratatouille (2007)"
    }
  };

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
          {wordData.word}
        </h1>
      </div>

      <div className="p-6">
        {/* Word image */}
        <div className="mb-6 rounded-xl overflow-hidden bg-white shadow-md">
          <img 
            src={wordData.media.image} 
            alt={wordData.word} 
            className="w-full h-48 object-cover"
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
              <h2 className="text-2xl font-bold capitalize">{wordData.word}</h2>
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
          <ul className="space-y-2">
            {wordData.examples.map((example, index) => (
              <li key={index} className="text-sm text-gray-700 bg-wordsnap-bg-alt p-3 rounded-lg">
                {example}
              </li>
            ))}
          </ul>
          
          <p className="text-xs text-gray-500 mt-4">
            {wordData.media.reference}
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
