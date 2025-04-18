
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { getFeaturedRecipes } from "@/data/recipes";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeaturedRecipes = () => {
  const featuredRecipes = getFeaturedRecipes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const recipesToShow = 3;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + recipesToShow >= featuredRecipes.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, featuredRecipes.length - recipesToShow) : prevIndex - 1
    );
  };
  
  const visibleRecipes = featuredRecipes.slice(currentIndex, currentIndex + recipesToShow);
  
  // If we don't have enough recipes remaining, add from the beginning
  if (visibleRecipes.length < recipesToShow) {
    visibleRecipes.push(...featuredRecipes.slice(0, recipesToShow - visibleRecipes.length));
  }
  
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2 font-playfair text-culinary-green">Featured Recipes</h2>
          <p className="text-gray-600 max-w-xl font-lato">Discover our most popular and beloved recipes, carefully selected for your enjoyment.</p>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-warm-beige hover:bg-culinary-orange hover:text-white transition-colors"
            aria-label="Previous recipes"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-warm-beige hover:bg-culinary-orange hover:text-white transition-colors"
            aria-label="Next recipes"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.coverImage}
            prepTime={recipe.totalTime}
            difficulty={recipe.difficulty}
            category={recipe.categories[0]}
            featured={true}
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a 
          href="/categories" 
          className="inline-block px-6 py-3 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors font-lato"
        >
          Browse All Recipes
        </a>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
