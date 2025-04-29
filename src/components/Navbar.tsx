
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-culinary-orange">
            Rinny's Whisk Wonders
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/categories" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            Recipes
          </Link>
          <Link to="/categories/quick-meals" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            Quick Meals
          </Link>
          <Link to="/categories/healthy" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            Healthy
          </Link>
          <Link to="/blog" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            Blog
          </Link>
          <Link to="/about" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-culinary-orange transition-colors font-lato">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="text-foreground hover:text-culinary-orange">
            <Search className="h-5 w-5" />
          </Link>
          <Button variant="ghost" className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
