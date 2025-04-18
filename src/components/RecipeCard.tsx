
import { Link } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";

export interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  featured?: boolean;
}

const RecipeCard = ({
  id,
  title,
  description,
  image,
  prepTime,
  difficulty,
  category,
  featured = false,
}: RecipeCardProps) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div 
        className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md ${
          featured ? "h-96" : "h-80"
        }`}
      >
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="absolute top-4 left-4">
          <span className="inline-block rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
        
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold font-playfair line-clamp-2">{title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2 font-lato">{description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{prepTime} min</span>
            </div>
            
            <div className="flex items-center">
              <ChefHat className="mr-1 h-4 w-4" />
              <span
                className={
                  difficulty === "Easy"
                    ? "text-herb-green"
                    : difficulty === "Medium"
                    ? "text-culinary-orange"
                    : "text-spice-red"
                }
              >
                {difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
