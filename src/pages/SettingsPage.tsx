
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const SettingsPage = () => {
  const [selectedNativeLanguage, setSelectedNativeLanguage] = useState("Chinese");
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState("English");
  
  const languages = [
    "English",
    "Spanish",
    "Japanese",
    "Korean",
    "French",
    "Chinese"
  ];
  
  return (
    <div className="h-[100dvh] bg-wordsnap-bg-light flex flex-col">
      {/* Header */}
      <div className="bg-wordsnap-primary-green pt-12 pb-3 px-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {/* Profile Section */}
        <section className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-wordsnap-primary-green flex items-center justify-center text-xl">
              👤
            </div>
            <div className="ml-3">
              <h2 className="font-semibold">User123</h2>
              <p className="text-xs text-gray-600">user@example.com</p>
            </div>
          </div>
        </section>
        
        {/* Language Settings */}
        <section className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h2 className="font-semibold mb-3">Language Settings</h2>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Your Native Language
              </label>
              <select 
                value={selectedNativeLanguage}
                onChange={(e) => setSelectedNativeLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              >
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Language You Want to Learn
              </label>
              <select 
                value={selectedTargetLanguage}
                onChange={(e) => setSelectedTargetLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              >
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
        
        {/* App Settings */}
        <section className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h2 className="font-semibold mb-3">App Settings</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Privacy Settings</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Help & Support</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">About Word Snap</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </section>
        
        <div className="text-center text-xs text-gray-500 mt-3 mb-safe">
          Word Snap v1.0
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
