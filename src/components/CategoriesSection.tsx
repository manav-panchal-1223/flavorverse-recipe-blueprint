
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

const CategoriesSection = () => {
  // Show just the first 6 categories
  const displayCategories = categories.slice(0, 6);
  
  return (
    <section className="bg-warm-beige py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 font-playfair text-culinary-green">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-lato">Find exactly what you're craving by exploring our recipe categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              recipeCount={category.recipeCount}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/categories" 
            className="inline-block px-6 py-3 bg-white text-culinary-green border border-culinary-green rounded-md hover:bg-culinary-green hover:text-white transition-colors font-lato"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
