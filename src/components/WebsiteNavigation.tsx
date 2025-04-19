
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Book, Home, Layers, LayoutTemplate } from "lucide-react";

const WebsiteNavigation = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/showcase", label: "Prototype", icon: <LayoutTemplate className="w-5 h-5" /> },
    { path: "/educational", label: "Annotations", icon: <Layers className="w-5 h-5" /> },
    { path: "/alignment", label: "Course Alignment", icon: <Book className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-wordsnap-primary-green">Word Snap Showcase</div>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors",
                      isActive
                        ? "bg-wordsnap-primary-green/20 text-gray-800 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WebsiteNavigation;
