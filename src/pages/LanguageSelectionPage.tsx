
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
          <h1 className="text-2xl font-bold mb-2">Select Your Languages</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Native</label>
              <Select
                value={nativeLanguage}
                onValueChange={setNativeLanguage}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select native language" />
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

            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Target</label>
              <Select
                value={targetLanguage}
                onValueChange={setTargetLanguage}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select target language" />
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
          </div>

          <Button 
            onClick={handleConfirm} 
            className="w-full mt-6 bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 text-gray-900 font-medium"
          >
            Confirm
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelectionPage;
