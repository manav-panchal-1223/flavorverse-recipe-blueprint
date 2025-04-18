
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { searchRecipes } from "@/data/recipes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const searchResults = query ? searchRecipes(query) : [];
  
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
          
          <h1 className="text-3xl font-bold mb-8 font-playfair">Search Results</h1>
          
          <div className="mb-8 max-w-2xl">
            <SearchBar 
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="w-full"
            />
          </div>
          
          {query && (
            <div className="mb-6">
              <p className="text-gray-600 font-lato">
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found for "{query}"
              </p>
            </div>
          )}
          
          {query && searchResults.length === 0 ? (
            <div className="text-center py-12 bg-warm-beige/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 font-playfair">No Recipes Found</h2>
              <p className="text-gray-600 mb-6 font-lato">
                We couldn't find any recipes matching your search.
              </p>
              <p className="text-gray-600 font-lato">Try:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 font-lato">
                <li>Using different keywords</li>
                <li>Checking for typos</li>
                <li>Searching for a specific ingredient</li>
                <li>Browsing our recipe categories</li>
              </ul>
              <Link 
                to="/categories" 
                className="inline-block px-6 py-2 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((recipe) => (
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

export default SearchPage;
