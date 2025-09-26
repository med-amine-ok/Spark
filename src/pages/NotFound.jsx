import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <Card className="max-w-md w-full text-center border-0 shadow-elevated">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">404</span>
            </div>
            <h1 className="text-3xl font-bold text-gradient mb-2">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              asChild
              className="w-full shadow-glow"
            >
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
