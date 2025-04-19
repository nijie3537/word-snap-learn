
import { motion } from "framer-motion";

const PracticePage = () => {
  const games = [
    {
      id: 1,
      title: "AI Battle",
      description: "Challenge AI in a timed vocabulary quiz",
      icon: "🤖",
      color: "#F2FCE2",
      comingSoon: false
    },
    {
      id: 2,
      title: "Word Matching",
      description: "Match words with their translations",
      icon: "🎮",
      color: "#FFF9E6",
      comingSoon: false
    },
    {
      id: 3,
      title: "Spelling Bee",
      description: "Test your spelling skills",
      icon: "🐝",
      color: "#FFEDDB", 
      comingSoon: false
    },
    {
      id: 4,
      title: "Multiplayer",
      description: "Challenge friends to vocabulary duels",
      icon: "👥",
      color: "#EDF1FE",
      comingSoon: true
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
        <div className="grid gap-4">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              style={{ backgroundColor: game.color }}
              className="rounded-xl p-5 shadow-sm relative overflow-hidden"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {game.comingSoon && (
                <div className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </div>
              )}
              
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{game.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{game.title}</h3>
                  <p className="text-sm text-gray-700">{game.description}</p>
                </div>
              </div>
              
              <button 
                className={`mt-4 w-full py-2 rounded-lg font-medium text-center ${
                  game.comingSoon 
                    ? "bg-gray-200 text-gray-500"
                    : "bg-wordsnap-primary-green text-gray-800"
                }`}
                disabled={game.comingSoon}
              >
                {game.comingSoon ? "Notify Me" : "Play Now"}
              </button>
            </motion.div>
          ))}
        </div>
        
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
