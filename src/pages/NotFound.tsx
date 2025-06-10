
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-neutral p-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">♻️</div>
        <h1 className="text-4xl font-bold mb-4 text-eco-dark">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! This page has been recycled or never existed.
        </p>
        <Button asChild className="bg-eco-primary hover:bg-eco-secondary">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
