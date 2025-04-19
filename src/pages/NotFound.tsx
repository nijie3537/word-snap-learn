import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wordsnap-bg-light">
      <div className="text-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl mb-4">📷</div>
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! We couldn't find that page
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-wordsnap-primary-green py-3 px-6 rounded-full font-medium"
          >
            Go to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
