
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/features");
  };

  return (
    <div className="h-[100dvh] bg-wordsnap-bg-light flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="relative mb-4">
          <div className="absolute -inset-1 bg-wordsnap-primary-green rounded-full blur opacity-30"></div>
          <div className="relative bg-white rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#C1FF84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#2D3748" strokeWidth="2"/>
              <path d="M17.5 6.5H17.51" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <motion.h1 
          className="text-3xl font-bold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Word Snap
        </motion.h1>
        
        <motion.p 
          className="text-sm text-gray-600 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Snap. Learn. Remember.
          <br />
          – AI-Powered Word Learning
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full max-w-xs px-4"
      >
        <Button 
          onClick={handleGetStarted}
          className="w-full py-3 text-base bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 rounded-full font-bold text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started →
        </Button>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
