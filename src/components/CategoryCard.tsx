
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
  path: string;
}

const CategoryCard = ({ title, icon, color, path }: CategoryCardProps) => {
  return (
    <Link 
      to={path}
      className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-md transition-transform duration-200 hover:scale-105 ${color} h-32`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-medium text-center">{title}</h3>
    </Link>
  );
};

export default CategoryCard;
