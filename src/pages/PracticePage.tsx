import { motion } from "framer-motion";
import { User, Users, Shuffle, Image, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const PracticePage = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const gameModes = [
    {
      id: "single",
      title: "Single Player",
      description: "Practice at your own pace",
      icon: User,
      color: "#F2FCE2"
    },
    {
      id: "ai",
      title: "AI Battle",
      description: "Challenge AI in word games",
      icon: Shuffle,
      color: "#FFF9E6"
    },
    {
      id: "multiplayer",
      title: "Multiplayer",
      description: "Challenge other players",
      icon: Users,
      color: "#EDF1FE",
    }
  ];

  const gameTypes = [
    {
      id: "matching",
      title: "Word Matching",
      description: "Match words with their images",
      icon: Image,
      color: "#FFF9E6"
    },
    {
      id: "translation",
      title: "Translation Quiz",
      description: "Choose correct translations",
      icon: Shuffle,
      color: "#F2FCE2"
    },
    {
      id: "listening",
      title: "Listening Challenge",
      description: "Listen and spell words",
      icon: Headphones,
      color: "#FFEDDB"
    }
  ];

  return (
    <div className="min-h-screen bg-wordsnap-bg-light pb-20">
      {/* Header */}
      <div className="bg-wordsnap-primary-green pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold">Practice Games</h1>
        <p className="text-sm">Strengthen your vocabulary through play</p>
      </div>
      
      <div className="p-6">
        {/* Game Mode Selection */}
        <h2 className="text-lg font-semibold mb-4">Select Game Mode</h2>
        <div className="grid gap-4 mb-8">
          {gameModes.map((mode, index) => (
            <motion.button
              key={mode.id}
              style={{ backgroundColor: mode.color }}
              className={`rounded-xl p-5 shadow-sm relative overflow-hidden w-full text-left ${
                selectedMode === mode.id ? 'ring-2 ring-wordsnap-primary-green' : ''
              }`}
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMode(mode.id)}
            >
              <div className="flex items-center space-x-4">
                <mode.icon className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-semibold">{mode.title}</h3>
                  <p className="text-sm text-gray-700">{mode.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Game Types */}
        {selectedMode && (
          <>
            <h2 className="text-lg font-semibold mb-4">Choose Game Type</h2>
            <div className="grid gap-4 mb-8">
              {gameTypes.map((game, index) => (
                <motion.div
                  key={game.id}
                  style={{ backgroundColor: game.color }}
                  className="rounded-xl p-5 shadow-sm relative overflow-hidden"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <game.icon className="w-8 h-8" />
                    <div>
                      <h3 className="text-lg font-semibold">{game.title}</h3>
                      <p className="text-sm text-gray-700">{game.description}</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="mt-4 w-full bg-wordsnap-primary-green text-gray-800"
                  >
                    Start Game
                  </Button>
                </motion.div>
              ))}
            </div>
          </>
        )}
        
        {/* Stats Section - Keep existing stats section unchanged */}
        <div className="mt-8 bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold mb-3">Your Stats</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-wordsnap-bg-light p-3 rounded-lg">
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-gray-600">Words Practiced</p>
            </div>
            <div className="bg-wordsnap-bg-light p-3 rounded-lg">
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-gray-600">Days Streak</p>
            </div>
            <div className="bg-wordsnap-bg-light p-3 rounded-lg">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-xs text-gray-600">Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
