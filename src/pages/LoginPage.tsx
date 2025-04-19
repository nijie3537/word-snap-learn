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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
          <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
          <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
          <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
        </svg>
      ),
      bgColor: "hover:bg-gray-100"
    },
    { 
      name: "WeChat", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#07C160" d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.133 0 .24-.11.24-.246 0-.06-.024-.12-.04-.177l-.325-1.233a.492.492 0 0 1 .177-.554c1.533-1.125 2.504-2.826 2.504-4.714 0-3.459-3.193-6.238-7.063-6.028zm-2.034 3.435c.535 0 .969.44.969.983a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.97-.983zm4.844 0c.535 0 .969.44.969.983a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.969-.983z"/>
        </svg>
      ),
      bgColor: "hover:bg-[#F2FCE2]"  
    },
    { 
      name: "Xiaohongshu", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#FE2C55" d="M21.0842 10.3442C21.0842 9.97609 20.7851 9.67704 20.4169 9.67704H17.0343V6.29444C17.0343 5.92633 16.7352 5.62727 16.3671 5.62727H7.63337C7.26526 5.62727 6.9662 5.92633 6.9662 6.29444V9.67704H3.58361C3.21549 9.67704 2.91644 9.97609 2.91644 10.3442V19.0779C2.91644 19.446 3.21549 19.7451 3.58361 19.7451H20.4169C20.7851 19.7451 21.0842 19.446 21.0842 19.0779V10.3442ZM8.30054 7.62878H15.6999V9.67704H8.30054V7.62878ZM19.0827 17.7436H4.91794V11.6785H19.0827V17.7436Z"/>
          <path fill="#FE2C55" d="M12.0002 12.6793C13.3649 12.6793 14.4752 13.7896 14.4752 15.1543C14.4752 16.519 13.3649 17.6293 12.0002 17.6293C10.6355 17.6293 9.52515 16.519 9.52515 15.1543C9.52515 13.7896 10.6355 12.6793 12.0002 12.6793Z"/>
        </svg>
      ),
      bgColor: "hover:bg-red-50"
    },
    { 
      name: "Weibo", 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#EA384C" d="M19.846 7.229c.837.916 1.454 2.075 1.454 3.37 0 4.826-6.207 10.693-15.3 10.693C2.122 21.292 0 19.877 0 17.333c0-1.487.898-3.244 2.45-4.902 2.647-2.817 6.654-4.48 9.744-4.48.74 0 1.378.06 1.878.178.766-.77 1.798-1.184 2.91-1.184 1.71 0 3.136 1.122 3.864 2.284zm-6.876 3.73c-2.473 0-5.864 1.517-8.147 3.993C3.526 16.316 2.792 17.66 2.792 18.7c0 1.487 1.516 2.284 3.864 2.284 4.826 0 9.773-3.022 9.773-6.49 0-1.609-1.26-3.534-3.459-3.534zm-1.959 6.858c-.898 0-1.624-.725-1.624-1.622 0-.896.726-1.622 1.624-1.622.897 0 1.623.726 1.623 1.622 0 .897-.726 1.622-1.623 1.622zm3.578-2.04c-.37 0-.672-.3-.672-.67 0-.37.302-.672.672-.672.37 0 .671.302.671.671 0 .37-.3.672-.671.672zm7.11-9.773c.243.243.243.637 0 .88l-.394.394a.622.622 0 0 1-.88 0l-.393-.394a.622.622 0 0 1 0-.88l.394-.394a.622.622 0 0 1 .88 0l.393.394zm-2.45-2.45c.485.486.485 1.274 0 1.76l-.395.394a1.245 1.245 0 0 1-1.759 0l-.394-.394a1.245 1.245 0 0 1 0-1.76l.394-.394a1.245 1.245 0 0 1 1.76 0l.394.394z"/>
        </svg>
      ),
      bgColor: "hover:bg-red-50"
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
                  className="w-full bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 text-black"
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
                  className="w-full bg-wordsnap-primary-green hover:bg-wordsnap-primary-green/90 text-black"
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
                  className={`inline-flex justify-center items-center p-3 border border-gray-200 rounded-md shadow-sm bg-white ${provider.bgColor} transition-colors duration-200`}
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
        <Button
          variant="ghost"
          className="mt-4 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/language-selection")}
        >
          Language Settings
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
