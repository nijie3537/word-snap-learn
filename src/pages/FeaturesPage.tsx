
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📸",
      title: "Snap & Learn",
      description: "Instantly translate objects in your photos.",
    },
    {
      icon: "🧠",
      title: "Smart Memory System",
      description: "Adapts to your learning curve with spaced repetition.",
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      description: "Learn 6+ languages seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen bg-wordsnap-bg-light flex flex-col p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-6 mt-4"
      >
        <h1 className="text-2xl font-game text-wordsnap-primary-green mb-2">Word Snap</h1>
        <p className="text-sm text-gray-600">
          Learn vocabulary through your camera lens
        </p>
      </motion.div>

      <div className="flex-grow flex flex-col justify-center my-2">
        <div className="grid gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h2 className="text-base font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-4 mb-2"
      >
        <Button
          onClick={() => navigate("/login")}
          className="w-full py-4 text-base bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 rounded-full font-bold text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started →
        </Button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;
