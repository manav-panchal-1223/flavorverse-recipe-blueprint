
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Various fresh ingredients on a wooden table"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair leading-tight animate-fade-in">
            Your Daily Dose of Delicious
          </h1>
          <p className="text-xl text-white/90 mb-8 font-lato max-w-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover recipes that inspire, techniques that empower, and flavors that delight.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <SearchBar large className="max-w-xl" placeholder="Search for recipes, ingredients, or cuisines..." />
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-lato">Quick Meals</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-lato">Healthy</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-lato">Vegetarian</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-lato">Desserts</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-lato">Italian</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
