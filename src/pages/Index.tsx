
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to splash screen
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wordsnap-bg-light">
      <div className="text-center">
        <div className="w-16 h-16 animate-pulse rounded-full bg-wordsnap-primary-green mx-auto mb-4"></div>
        <h1 className="text-xl font-medium">Loading Word Snap...</h1>
      </div>
    </div>
  );
};

export default Index;
