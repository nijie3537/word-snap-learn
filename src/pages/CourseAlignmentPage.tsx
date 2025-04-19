
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const CourseAlignmentPage = () => {
  const courseIntegrations = [
    {
      title: "Affordance-Driven Design (Lesson 1)",
      description: "The application implements intuitive user interfaces following Norman's design principles, creating a seamless learning experience that reduces cognitive load.",
      examples: [
        "Clear typography and minimalist layout in welcome screens",
        "Consistent color psychology promoting focus",
        "Intuitive navigation between learning modules"
      ]
    },
    {
      title: "Generative AI (Lesson 6)",
      description: "Word Snap leverages generative AI for dynamic content creation, personalized to each user's learning patterns and needs.",
      examples: [
        "GPT-4 integration for generating personalized mnemonics",
        "Dynamic example generation based on user context",
        "Multimedia integration following CAMIL's immersive learning framework"
      ]
    },
    {
      title: "Machine Learning (Lessons 2A & 4)",
      description: "Advanced ML algorithms power both the personalization and object recognition capabilities of the application.",
      examples: [
        "Clustering algorithms for automatic word categorization",
        "CART/Logistic Regression for personalized recommendations",
        "OpenCV and YOLO implementation for real-time object detection"
      ]
    },
    {
      title: "Hybrid Intelligence (Lesson 2A)",
      description: "The application demonstrates effective collaboration between AI systems and human users in the learning context.",
      examples: [
        "AI opponents in practice games using reinforcement learning",
        "Human creativity combined with AI assistance",
        "Adaptive feedback based on performance analysis"
      ]
    },
    {
      title: "Database & IoT Integration (Lessons 3 & 7)",
      description: "Robust data management and IoT principles ensure seamless user experience across devices and sessions.",
      examples: [
        "MySQL database for user data management",
        "Third-party authentication following IoT principles",
        "Real-time configuration updates through AI agents"
      ]
    }
  ];

  const educationalTheories = [
    {
      theory: "Constructivism (Piaget)",
      application: "Users build knowledge through interaction with their environment, photographing objects to learn new vocabulary in context."
    },
    {
      theory: "Zone of Proximal Development (Vygotsky)",
      application: "Adaptive difficulty in practice games bridges the gap between what learners can do independently and with assistance."
    },
    {
      theory: "Spaced Repetition (Ebbinghaus)",
      application: "Review reminders follow the forgetting curve to optimize memory retention and vocabulary acquisition."
    },
    {
      theory: "Self-Regulated Learning (Grow)",
      application: "Users maintain autonomy in customizing their learning path through language preferences and practice modes."
    },
    {
      theory: "CAMIL Framework (Makransky)",
      application: "Immersive learning experiences through multimedia integration and contextual word discovery."
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
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
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Course Content Alignment</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Word Snap demonstrates practical applications of key course principles, bridging theoretical frameworks with technical implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Overall Alignment with Course Content</h2>
                <p className="text-gray-600 mb-6">
                  The Word Snap application demonstrates comprehensive integration of AI-in-Education principles, 
                  bridging theoretical frameworks with practical technical implementation. The prototype serves 
                  as a case study in applying modern educational technologies to language acquisition.
                </p>
                
                <motion.div 
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                  className="space-y-4"
                >
                  {courseIntegrations.map((integration, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="border-l-4 border-l-wordsnap-primary-green pl-4 py-1"
                    >
                      <h3 className="font-bold">{integration.title}</h3>
                      <p className="text-gray-600 text-sm my-1">{integration.description}</p>
                      <ul className="mt-2 space-y-1">
                        {integration.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="min-w-4 h-4 text-wordsnap-primary-green mt-0.5" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Educational Theories</h2>
                <p className="text-gray-600 mb-6">
                  The application implements established educational theories to create an effective learning environment.
                </p>
                
                <div className="space-y-4">
                  {educationalTheories.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                      <h3 className="font-bold text-sm">{item.theory}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.application}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Technical Implementation</h2>
                <p className="text-gray-600 mb-4">
                  Key technologies used in the Word Snap application:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-wordsnap-primary-green"></div>
                    <span>OpenCV & YOLO for object detection</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-wordsnap-primary-green"></div>
                    <span>GPT-4 for content generation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-wordsnap-primary-green"></div>
                    <span>MySQL for data management</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-wordsnap-primary-green"></div>
                    <span>spaCy & Transformers for NLP</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-wordsnap-primary-green"></div>
                    <span>Reinforcement learning for adaptive systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-600">
              This application demonstrates the practical application of AI-in-Education principles, bridging theoretical 
              frameworks (e.g., Piaget's assimilation-accommodation, Vygotsky's social constructivism) with technical tools 
              (OpenCV, GPT-4, MySQL). Through its implementation, Word Snap showcases how modern educational technology 
              can be leveraged to create engaging, effective, and personalized learning experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseAlignmentPage;
