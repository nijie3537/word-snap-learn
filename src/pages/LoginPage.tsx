
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const socialProviders = [
    { 
      name: "Google", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M17.13 17.13L6.87 6.87"/>
          <path d="M17.13 6.87L6.87 17.13"/>
        </svg>
      ) 
    },
    { 
      name: "WeChat", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M15 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M9 12h6"/>
        </svg>
      ) 
    },
    { 
      name: "Xiaohongshu", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    { 
      name: "Weibo", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12a8 8 0 0 0-8-8"/>
          <path d="M4 12a8 8 0 0 1 8-8"/>
          <path d="M12 4v8"/>
          <circle cx="12" cy="16" r="4"/>
        </svg>
      )
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Welcome to Word Snap!",
      });
      navigate("/language-selection");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-wordsnap-bg-light flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to Word Snap</h1>
          <p className="text-gray-600">Sign in to continue your learning journey</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Verification Code"
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline"
                      className="whitespace-nowrap"
                    >
                      Get Code
                    </Button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify & Sign In"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              {socialProviders.map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  className="inline-flex justify-center items-center p-3 border border-gray-200 rounded-md shadow-sm bg-white hover:bg-gray-50"
                  onClick={() => {
                    toast({
                      title: `${provider.name} Login`,
                      description: "This feature is coming soon!",
                    });
                  }}
                >
                  <span className="sr-only">Sign in with {provider.name}</span>
                  <provider.icon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <UserPlus className="w-5 h-5" />
          <p className="text-sm">
            No account? 
            <Button 
              variant="link" 
              className="text-wordsnap-primary-green px-1"
              onClick={() => navigate("/signup")}
            >
              Register now
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
