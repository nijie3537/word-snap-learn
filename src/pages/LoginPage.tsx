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
              {["Google", "WeChat", "Xiaohongshu", "Weibo"].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  className="inline-flex justify-center items-center p-3 border border-gray-200 rounded-md shadow-sm bg-white hover:bg-gray-50"
                  onClick={() => {
                    toast({
                      title: `${provider} Login`,
                      description: "This feature is coming soon!",
                    });
                  }}
                >
                  <span className="sr-only">Sign in with {provider}</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    {provider[0]}
                  </div>
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
