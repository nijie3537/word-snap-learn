
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
    <div className="min-h-screen bg-wordsnap-bg-light flex flex-col justify-between p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12 mt-12"
      >
        <h1 className="text-2xl font-bold mb-4">Welcome to Word Snap</h1>
        <p className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
          Learn vocabulary through your camera lens
        </p>
      </motion.div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="grid gap-6">
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
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
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
        className="mt-8"
      >
        <Button
          onClick={() => navigate("/login")}
          className="w-full py-6 text-lg bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 rounded-full font-bold text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started →
        </Button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;
