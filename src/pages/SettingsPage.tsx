
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
    <div className="min-h-screen bg-wordsnap-bg-light pb-20">
      {/* Header */}
      <div className="bg-wordsnap-primary-green pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="p-6">
        {/* Profile Section */}
        <section className="bg-white rounded-xl p-5 shadow-sm mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-wordsnap-primary-green flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">User123</h2>
              <p className="text-sm text-gray-600">user@example.com</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 border border-gray-300 rounded-lg text-center">
              Edit Profile
            </button>
          </div>
        </section>
        
        {/* Language Settings */}
        <section className="bg-white rounded-xl p-5 shadow-sm mb-6">
          <h2 className="font-semibold mb-4">Language Settings</h2>
          
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">
              Your Native Language
            </label>
            <select 
              value={selectedNativeLanguage}
              onChange={(e) => setSelectedNativeLanguage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Language You Want to Learn
            </label>
            <select 
              value={selectedTargetLanguage}
              onChange={(e) => setSelectedTargetLanguage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </section>
        
        {/* App Settings */}
        <section className="bg-white rounded-xl p-5 shadow-sm mb-6">
          <h2 className="font-semibold mb-4">App Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Notifications</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Privacy Settings</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Help & Support</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>About Word Snap</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </section>
        
        <div className="text-center text-xs text-gray-500 mt-6">
          Word Snap v1.0
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
