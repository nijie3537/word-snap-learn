
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProjectShowcase = () => {
  const navigate = useNavigate();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-wordsnap-bg-light py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Word Snap Project Showcase</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the complete prototype of our Word Snap application, designed to revolutionize vocabulary learning through AI and smartphone technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Project Overview</h2>
                <p className="text-gray-600 mb-4">
                  Word Snap is an innovative language learning application that combines computer vision, AI, and 
                  interactive learning techniques to help users expand their vocabulary naturally through their environment.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <span className="bg-wordsnap-primary-green/20 text-gray-800 font-medium px-2 py-1 rounded text-sm">AI Powered</span>
                    <span className="bg-wordsnap-primary-green/20 text-gray-800 font-medium px-2 py-1 rounded text-sm">Adaptive Learning</span>
                    <span className="bg-wordsnap-primary-green/20 text-gray-800 font-medium px-2 py-1 rounded text-sm">Multi-language</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-wordsnap-primary-green/20 text-gray-800 font-medium px-2 py-1 rounded text-sm">Computer Vision</span>
                    <span className="bg-wordsnap-primary-green/20 text-gray-800 font-medium px-2 py-1 rounded text-sm">Machine Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Design Principles</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex items-center justify-center">•</div>
                    <span>Intuitive interfaces following Norman's design principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex items-center justify-center">•</div>
                    <span>Strategic color psychology to promote focus and learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex items-center justify-center">•</div>
                    <span>Educational frameworks integrated throughout the experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex items-center justify-center">•</div>
                    <span>Personalized learning paths based on user interaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Button 
              onClick={() => navigate("/educational")}
              className="bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 text-gray-800 font-medium"
            >
              Explore Educational Annotations →
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden border border-gray-200">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://preview--word-snap-learn.lovable.app/home" 
                title="Word Snap App Preview"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Live preview of the Word Snap application
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-3">Project Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://lovable.dev/projects/022a2659-fb2e-4911-9f8a-3d1ddc2b1da2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Lovable Project</h3>
                  <p className="text-sm text-gray-600">View the complete project in Lovable's editor</p>
                </a>
                
                <a 
                  href="https://preview--word-snap-learn.lovable.app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Live Preview</h3>
                  <p className="text-sm text-gray-600">Interact with the live app in a separate window</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
