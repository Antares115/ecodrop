
import { useState } from "react";
import { dropOffLocations } from "@/data/items";
import { toast } from "@/components/ui/sonner";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapPage = () => {
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    
    setLoading(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position);
        setLoading(false);
        toast.success("Location found! Showing nearby drop-off points");
      },
      () => {
        toast.error("Unable to retrieve your location");
        setLoading(false);
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-eco-dark">Recycling Drop-off Locations</h1>
      
      <div className="mb-6 flex justify-center">
        <Button 
          onClick={handleGetLocation} 
          disabled={loading}
          className="bg-eco-primary hover:bg-eco-secondary"
        >
          <MapPin className="mr-2 h-5 w-5" />
          {loading ? "Finding your location..." : "Find Nearby Locations"}
        </Button>
      </div>
      
      <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
        <p className="text-gray-600">
          Map visualization would appear here with drop-off points
          <br />
          <span className="text-sm">(Map integration would be implemented with a real map provider)</span>
        </p>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Available Drop-off Locations</h2>
      
      <div className="space-y-4">
        {dropOffLocations.map(location => (
          <div key={location.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg text-eco-dark">{location.name}</h3>
            <p className="text-gray-600 mb-2">{location.address}</p>
            
            <div className="mb-2">
              <h4 className="font-medium text-sm text-gray-700">Accepted Items:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {location.acceptedItems.map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-eco-light text-eco-dark text-xs px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              <span className="font-medium">Hours:</span> {location.hours}
            </p>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3 text-eco-primary hover:bg-eco-light hover:text-eco-dark"
            >
              Get Directions
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPage;
