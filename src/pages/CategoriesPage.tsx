
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
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
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-playfair">Recipe Categories</h1>
            <p className="text-gray-600 max-w-2xl mx-auto font-lato">
              Browse our collection of recipes by category to find exactly what you're looking for,
              from quick weeknight dinners to indulgent desserts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                image={category.image}
                recipeCount={category.recipeCount}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
