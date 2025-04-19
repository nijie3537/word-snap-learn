
import { useEffect } from "react";

// Component to handle app metadata, viewport settings, and iOS specific behaviors
const AppMetadata = () => {
  useEffect(() => {
    // Set viewport to match iOS device width and prevent unwanted scaling
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no";
    document.head.appendChild(viewportMeta);

    // Add iOS specific classes to body
    document.body.classList.add("bg-wordsnap-bg-light");
    
    // iOS specific status bar settings
    const statusBarMeta = document.createElement("meta");
    statusBarMeta.name = "apple-mobile-web-app-status-bar-style";
    statusBarMeta.content = "black-translucent";
    document.head.appendChild(statusBarMeta);

    // iOS web app capable
    const webAppCapable = document.createElement("meta");
    webAppCapable.name = "apple-mobile-web-app-capable";
    webAppCapable.content = "yes";
    document.head.appendChild(webAppCapable);

    // Add some extra padding for iOS safe areas
    const root = document.documentElement;
    root.style.setProperty("--sat-top", "env(safe-area-inset-top)");
    root.style.setProperty("--sat-bottom", "env(safe-area-inset-bottom)");

    return () => {
      document.head.removeChild(viewportMeta);
      document.head.removeChild(statusBarMeta);
      document.head.removeChild(webAppCapable);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AppMetadata;
