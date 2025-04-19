
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
        className="text-center mb-4"
      >
        <h1 className="text-xl font-bold mb-2 text-gray-800">Key Features</h1>
      </motion.div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="grid gap-4">
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
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h2 className="text-base font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-snug">
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
        className="mt-6"
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

