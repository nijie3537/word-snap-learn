
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationalAnnotations = () => {
  const annotations = [
    {
      id: "splash",
      title: "Splash & Welcome Screen",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png",
      annotations: [
        {
          title: "Technology Affordance (Lesson 1)",
          description: "Follows Norman's principles (1988) by using intuitive design (e.g., clear typography, minimalist layout) to signal core functionality. The slogan directly communicates the app's purpose, reducing cognitive load and aligning with perceived affordance."
        },
        {
          title: "Color Psychology",
          description: "Promotes focus and calmness, supporting immersive learning (Kovács et al., 2015)."
        }
      ]
    },
    {
      id: "features",
      title: "Key Features",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png",
      annotations: [
        {
          title: "Generative AI (Lesson 6)",
          feature: "Snap and Learn & Smart Memory System",
          description: "Uses GPT-4 to generate personalized mnemonics (e.g., etymology, word roots), adhering to GenAI's role in adaptive content creation (Trent, 2024)."
        },
        {
          title: "NLP Frameworks",
          feature: "Multi-Language Support",
          description: "Leverages spaCy and Transformers for real-time translation and cross-lingual processing, reflecting GenAI's capacity for content adaptation (Education Horizons, 2024)."
        }
      ]
    },
    {
      id: "login",
      title: "Login & Registration",
      image: "/lovable-uploads/349b280c-9d9c-4b73-a2d4-f536271ae068.png",
      annotations: [
        {
          title: "Database & Self-Regulated Learning (Lesson 3)",
          feature: "Login credentials & language preferences",
          description: "User data is stored in MySQL, supporting autonomy in learning path customization (Grow, 1991)."
        },
        {
          title: "API Integration",
          feature: "Third-party authentication",
          description: "Third-party authentication aligns with IoT principles (Lesson 7), ensuring seamless data flow and interoperability (e.g., RFID tracking analogy)."
        }
      ]
    },
    {
      id: "camera",
      title: "Camera & Visual Recognition",
      image: "/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png",
      annotations: [
        {
          title: "OpenCV & Computer Vision (Lesson 4)",
          description: "Implements Haar cascades and YOLO for real-time object detection, mirroring industry applications like autonomous vehicles (OpenCV documentation)."
        },
        {
          title: "Generative AI (Lesson 6)",
          feature: "Word popup with pronunciation & examples",
          description: "GPT-4 dynamically generates examples and integrates multimedia (audio/video), aligning with CAMIL's immersive learning framework (Makransky, 2021)."
        }
      ]
    },
    {
      id: "wordbook",
      title: "Wordbook Organization",
      image: "/lovable-uploads/c5c9118f-9818-477c-9b16-144732873347.png",
      annotations: [
        {
          title: "Machine Learning (Lesson 2A)",
          feature: "Categories",
          description: "Uses clustering algorithms (unsupervised learning) for auto-tagging scenes and CART/Logistic Regression for personalized recommendations (Jonassen, 1997)."
        },
        {
          title: "Adaptive Systems (Lesson 1)",
          feature: "Review reminders & AI recommendations",
          description: "Tailors content based on user behavior (e.g., frequent café photos → coffee-related terms), reflecting Smith & Darvas' (2017) principles of adaptive feedback. Implements Ebbinghaus' forgetting curve for optimal review scheduling."
        }
      ]
    },
    {
      id: "practice",
      title: "Practice & Games",
      image: "/lovable-uploads/3972fc6f-677c-48b1-8cdf-257e78b7988d.png",
      annotations: [
        {
          title: "Hybrid Intelligence (Lesson 2A)",
          description: "Combines reinforcement learning (AI opponent) with human creativity (e.g., strategy formulation), exemplifying human-AI collaboration (IBM Watson Health case)."
        },
        {
          title: "Engagement Theory",
          description: "Gamification mechanics (e.g., points, leaderboards) align with Vygotsky's (1994) social constructivism, fostering motivation through interactive learning."
        }
      ]
    },
    {
      id: "settings",
      title: "Settings & User Management",
      image: "/lovable-uploads/686e5f44-719f-410f-b1a8-0237f41178e6.png",
      annotations: [
        {
          title: "AI Agents & IoT (Lesson 7)",
          feature: "Language switching",
          description: "Language switching is managed by autonomous AI agents that adapt configurations in real-time (e.g., RFID-like dynamic updates)."
        },
        {
          title: "Data Synchronization",
          feature: "User data management",
          description: "MySQL ensures seamless integration of user preferences, reflecting IoT's role in scalable, real-time systems (e.g., smart HVAC analogy)."
        }
      ]
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-wordsnap-bg-light py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Educational Annotations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how Word Snap integrates educational theories and advanced technologies to create an effective language learning experience.
          </p>
        </motion.div>

        <Tabs defaultValue="splash" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8 bg-white p-1 rounded-lg">
            {annotations.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="text-xs md:text-sm">
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {annotations.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card className="overflow-hidden">
                  <div className="h-[300px] md:h-[400px] relative">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Screen capture from the Word Snap application
                    </p>
                  </CardContent>
                </Card>
                
                <div className="space-y-4">
                  {section.annotations.map((annotation, idx) => (
                    <Card key={idx} className="border-l-4 border-l-wordsnap-primary-green">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-1">{annotation.title}</h3>
                        {annotation.feature && (
                          <div className="mb-2">
                            <span className="inline-block bg-wordsnap-primary-green/20 text-gray-800 px-2 py-0.5 rounded text-sm">
                              Feature: {annotation.feature}
                            </span>
                          </div>
                        )}
                        <p className="text-gray-600">{annotation.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default EducationalAnnotations;
