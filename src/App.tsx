import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMetadata from "./components/AppMetadata";
import SplashScreen from "./pages/SplashScreen";
import FeaturesPage from "./pages/FeaturesPage";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import WordbookPage from "./pages/WordbookPage";
import PracticePage from "./pages/PracticePage";
import SettingsPage from "./pages/SettingsPage";
import WordDetailPage from "./pages/WordDetailPage";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppMetadata />
        <div className="min-h-screen bg-wordsnap-bg-light">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/wordbook" element={<WordbookPage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/word/:word" element={<WordDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
