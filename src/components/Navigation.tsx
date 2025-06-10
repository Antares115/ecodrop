
import { Link, useLocation } from "react-router-dom";
import { Search, Barcode, MapPin, Map } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Search", path: "/", icon: Search },
    { name: "Items", path: "/items", icon: Search },
    { name: "Scan", path: "/scanner", icon: Barcode },
    { name: "Map", path: "/map", icon: Map }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                isActive ? "text-eco-primary" : "text-gray-500"
              }`}
            >
              <IconComponent className={`w-6 h-6 ${isActive ? "text-eco-primary" : "text-gray-500"}`} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
