
import { Link } from "react-router-dom";

interface ItemCardProps {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  image?: string;
}

const ItemCard = ({ id, name, category, difficulty, image }: ItemCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch(level.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/items/${id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
        <div className="h-40 bg-eco-light flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="text-4xl">♻️</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 text-eco-dark">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{category}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
