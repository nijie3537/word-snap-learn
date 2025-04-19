
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMetadata from "./components/AppMetadata";
import SplashScreen from "./pages/SplashScreen";
import FeaturesPage from "./pages/FeaturesPage";
import LoginPage from "./pages/LoginPage";
import LanguageSelectionPage from "./pages/LanguageSelectionPage";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import WordbookPage from "./pages/WordbookPage";
import PracticePage from "./pages/PracticePage";
import SettingsPage from "./pages/SettingsPage";
import WordDetailPage from "./pages/WordDetailPage";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";
import ProjectShowcase from "./pages/ProjectShowcase";
import EducationalAnnotations from "./pages/EducationalAnnotations";
import CourseAlignmentPage from "./pages/CourseAlignmentPage";
import WebsiteNavigation from "./components/WebsiteNavigation";

const queryClient = new QueryClient();

const App = () => {
  // Check if we're in the app or the showcase website
  const isAppRoute = window.location.pathname.match(/^\/(home|camera|wordbook|practice|settings|word)/);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppMetadata />
          <div className="min-h-screen bg-wordsnap-bg-light">
            {!isAppRoute && <WebsiteNavigation />}
            <Routes>
              {/* Website Routes */}
              <Route path="/" element={<FeaturesPage />} />
              <Route path="/showcase" element={<ProjectShowcase />} />
              <Route path="/educational" element={<EducationalAnnotations />} />
              <Route path="/alignment" element={<CourseAlignmentPage />} />
              
              {/* App Routes */}
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/language-selection" element={<LanguageSelectionPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/wordbook" element={<WordbookPage />} />
              <Route path="/camera" element={<CameraPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/word/:word" element={<WordDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {isAppRoute && <BottomNavigation />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
