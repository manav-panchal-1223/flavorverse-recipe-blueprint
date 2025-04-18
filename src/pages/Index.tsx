
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CategoriesSection from "@/components/CategoriesSection";
import LatestRecipes from "@/components/LatestRecipes";
import SeasonalSpotlight from "@/components/SeasonalSpotlight";
import QuickTip from "@/components/QuickTip";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedRecipes />
        <CategoriesSection />
        <SeasonalSpotlight />
        <LatestRecipes />
        <QuickTip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
