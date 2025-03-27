
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import BinaryRain from "@/components/BinaryRain";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <BinaryRain />
      <GlassCard className="p-8 md:p-12 max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 text-white text-glow">404</h1>
        <p className="text-xl text-gray-300 mb-8">This reality doesn't exist</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary/20 border border-primary/50 rounded-lg text-white hover:bg-primary/30 transition-all duration-300"
        >
          Return to Home
        </button>
      </GlassCard>
    </div>
  );
};

export default NotFound;
