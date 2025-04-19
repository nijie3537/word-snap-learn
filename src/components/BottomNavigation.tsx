
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Camera, BookText, Settings } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't show navigation on camera, login, and other specified paths
  const hiddenPaths = ["/camera", "/", "/features", "/login"];
  if (hiddenPaths.includes(currentPath)) {
    return null;
  }

  const navItems = [
    {
      name: "Home",
      icon: Home,
      path: "/home",
    },
    {
      name: "Wordbook",
      icon: BookOpen,
      path: "/wordbook",
    },
    {
      name: "Camera",
      icon: Camera,
      path: "/camera",
    },
    {
      name: "Practice",
      icon: BookText,
      path: "/practice",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          
          return (
            <Link 
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center ${
                isActive ? "text-wordsnap-primary-green" : "text-gray-500"
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
