
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeContent from "@/components/RecipeContent";
import { getRecipeById } from "@/data/recipes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? getRecipeById(id) : undefined;
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 font-playfair">Recipe Not Found</h1>
            <p className="text-gray-600 mb-6 font-lato">
              We couldn't find the recipe you're looking for.
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
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-culinary-orange hover:underline"
            >
              <ChevronLeft size={20} />
              <span>Back to recipes</span>
            </Link>
          </div>
          
          <RecipeContent recipe={recipe} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipePage;
