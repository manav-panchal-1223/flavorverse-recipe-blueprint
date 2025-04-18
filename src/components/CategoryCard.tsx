
import { Link } from "react-router-dom";

export interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  recipeCount: number;
}

const CategoryCard = ({ id, title, image, recipeCount }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${id}`}>
      <div className="group relative overflow-hidden rounded-lg h-40">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold font-playfair">{title}</h3>
          <p className="text-sm font-lato">{recipeCount} recipes</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
