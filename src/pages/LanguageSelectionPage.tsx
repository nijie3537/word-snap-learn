
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "EN", name: "English" },
  { code: "CN", name: "Chinese" },
  { code: "ES", name: "Spanish" },
  { code: "JP", name: "Japanese" },
  { code: "KR", name: "Korean" },
  { code: "FR", name: "French" },
];

const LanguageSelectionPage = () => {
  const navigate = useNavigate();
  const [nativeLanguage, setNativeLanguage] = useState("CN");
  const [targetLanguage, setTargetLanguage] = useState("EN");

  const handleConfirm = () => {
    // In a real app, you would save these preferences to user profile
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-wordsnap-bg-light flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Select Your Languages</h1>
          <p className="text-gray-600">Personalize your learning experience</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Native Language</label>
            <Select
              value={nativeLanguage}
              onValueChange={setNativeLanguage}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your native language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Target Language</label>
            <Select
              value={targetLanguage}
              onValueChange={setTargetLanguage}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language to learn" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem 
                    key={lang.code} 
                    value={lang.code}
                    disabled={lang.code === nativeLanguage}
                  >
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleConfirm} 
            className="w-full bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90"
          >
            Confirm
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelectionPage;
