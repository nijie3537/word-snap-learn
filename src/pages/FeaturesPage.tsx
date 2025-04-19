
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
        className="text-center mb-8 mt-12"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome to Word Snap</h1>
        <p className="text-gray-600">Learn vocabulary through your camera lens</p>
      </motion.div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="flex items-start"
            >
              <div className="text-4xl mr-4">{feature.icon}</div>
              <div>
                <h2 className="text-xl font-semibold mb-1">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
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
          className="w-full py-6 text-lg bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 rounded-full"
        >
          Get Started →
        </Button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;
