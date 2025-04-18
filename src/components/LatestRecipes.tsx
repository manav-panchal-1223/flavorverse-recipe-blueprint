
import RecipeCard from "./RecipeCard";
import { getLatestRecipes } from "@/data/recipes";

const LatestRecipes = () => {
  const latestRecipes = getLatestRecipes(3);
  
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 font-playfair text-culinary-green">Latest Recipes</h2>
        <p className="text-gray-600 max-w-xl font-lato">Fresh from our kitchen to yours. Check out our newest creations.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.coverImage}
            prepTime={recipe.totalTime}
            difficulty={recipe.difficulty}
            category={recipe.categories[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestRecipes;
