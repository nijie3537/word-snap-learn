
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-5 shadow-sm mb-4"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <div className="text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

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
    <div className="min-h-screen bg-wordsnap-bg-light flex flex-col items-center px-6 pt-12 pb-6">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Word Snap</h1>
        <p className="text-center text-gray-600 mb-8">Enhance your vocabulary effortlessly</p>
        
        <div className="mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <motion.button
          onClick={() => navigate("/camera")}
          className="w-full py-3 px-6 text-center bg-wordsnap-primary-green rounded-full font-medium text-gray-800 shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          → Get Started
        </motion.button>
        
        <p className="text-xs text-center text-gray-500 mt-6">
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;
