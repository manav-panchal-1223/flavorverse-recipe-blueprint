
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { getCategoryById } from "@/data/categories";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  
  const [sortBy, setSortBy] = useState("newest");
  const [difficulty, setDifficulty] = useState("all");
  
  // Filter recipes that belong to this category
  const filteredRecipes = recipes.filter(recipe => 
    recipe.categories.some(cat => cat.toLowerCase() === category?.title.toLowerCase())
  );
  
  // Apply further filtering based on difficulty
  const difficultyFilteredRecipes = difficulty === "all" 
    ? filteredRecipes 
    : filteredRecipes.filter(recipe => recipe.difficulty.toLowerCase() === difficulty.toLowerCase());
  
  // Sort the recipes
  const sortedRecipes = [...difficultyFilteredRecipes].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "prep-time-asc") {
      return a.prepTime - b.prepTime;
    } else if (sortBy === "prep-time-desc") {
      return b.prepTime - a.prepTime;
    }
    return 0;
  });
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 font-playfair">Category Not Found</h1>
            <p className="text-gray-600 mb-6 font-lato">
              We couldn't find the category you're looking for.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-culinary-orange hover:underline"
            >
              <ChevronLeft size={20} />
              <span>Back to home</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-culinary-orange hover:underline"
            >
              <ChevronLeft size={20} />
              <span>Back to home</span>
            </Link>
          </div>
          
          {/* Category Header */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2 font-playfair">{category.title}</h1>
              <p className="text-white/90 max-w-2xl font-lato">{category.description}</p>
            </div>
          </div>
          
          {/* Filters */}
          <div className="bg-warm-beige/50 p-4 rounded-lg mb-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center">
                <span className="text-gray-700 mr-2 font-lato">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border-gray-300 focus:ring-culinary-orange focus:border-culinary-orange"
                >
                  <option value="newest">Newest</option>
                  <option value="prep-time-asc">Prep Time (Low to High)</option>
                  <option value="prep-time-desc">Prep Time (High to Low)</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-2 font-lato">Difficulty:</span>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="rounded-md border-gray-300 focus:ring-culinary-orange focus:border-culinary-orange"
                >
                  <option value="all">All</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              
              <div className="text-gray-700 font-lato">
                {sortedRecipes.length} {sortedRecipes.length === 1 ? 'recipe' : 'recipes'} found
              </div>
            </div>
          </div>
          
          {/* Recipes Grid */}
          {sortedRecipes.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2 font-playfair">No Recipes Found</h2>
              <p className="text-gray-600 font-lato">
                Try changing your filters to see more recipes.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedRecipes.map((recipe) => (
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
