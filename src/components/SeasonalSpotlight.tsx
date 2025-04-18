
import { Link } from "react-router-dom";

const SeasonalSpotlight = () => {
  // This would typically be dynamic based on the current season
  const season = "Summer"; // Could be determined programmatically
  
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="bg-gradient-to-r from-culinary-green to-herb-green rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-white/80 uppercase tracking-wider font-lato">Seasonal Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white font-playfair">
              {season} Favorites
            </h2>
            <p className="text-white/90 mb-6 font-lato">
              Embrace the flavors of {season} with our collection of seasonal recipes featuring the freshest ingredients and bold flavors.
            </p>
            <Link 
              to="/categories/seasonal" 
              className="inline-block px-6 py-3 bg-white text-culinary-green rounded-md hover:bg-white/90 transition-colors font-lato max-w-fit"
            >
              Explore {season} Recipes
            </Link>
          </div>
          
          <div className="md:w-1/2 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=1000&auto=format&fit=crop" 
              alt={`${season} Recipes`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpotlight;
