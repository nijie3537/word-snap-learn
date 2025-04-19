
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
    }
  ];

  return (
    <div className="h-screen bg-wordsnap-bg-light flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-6"
      >
        <h1 className="text-xl font-bold text-gray-800">Key Features</h1>
      </motion.div>

      <div className="grid gap-4 w-full max-w-sm mx-auto">
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
            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{feature.icon}</div>
              <div>
                <h2 className="text-sm font-bold text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-xs text-gray-600 leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-6 pb-8 flex justify-center items-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full max-w-sm"
        >
          <Button
            onClick={() => navigate("/login")}
            className="w-full py-4 text-base bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 rounded-full font-bold text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
