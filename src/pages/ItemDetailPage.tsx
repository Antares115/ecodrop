
import { useParams, useNavigate } from "react-router-dom";
import { getItemById } from "@/data/items";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = id ? getItemById(id) : undefined;

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Item Not Found</h1>
        <p className="mb-6">The item you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/items")}>View All Items</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Button 
        variant="outline" 
        size="sm" 
        className="mb-4 flex items-center" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-56 bg-eco-light flex items-center justify-center">
          {item.image ? (
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
          ) : (
            <div className="text-6xl">♻️</div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-eco-dark">{item.name}</h1>
            <span className={`px-3 py-1 rounded-full text-sm ${
              item.difficulty === 'Easy' 
                ? 'bg-green-100 text-green-800' 
                : item.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
            }`}>
              {item.difficulty} to recycle
            </span>
          </div>

          <div className="mb-6">
            <span className="inline-block bg-eco-light text-eco-dark rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {item.category}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-eco-secondary">Description</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-eco-secondary">How to Dispose</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {item.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          </div>

          {item.alternatives.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-eco-secondary">Alternatives</h2>
              <ul className="list-disc pl-5 space-y-2">
                {item.alternatives.map((alternative, index) => (
                  <li key={index} className="text-gray-700">{alternative}</li>
                ))}
              </ul>
            </div>
          )}
          
          <Button
            className="w-full mt-4 bg-eco-primary hover:bg-eco-secondary"
            onClick={() => navigate("/map")}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Find Drop-off Locations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
