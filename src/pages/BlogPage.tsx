
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: "essential-kitchen-tools",
      title: "10 Essential Kitchen Tools Every Home Cook Needs",
      excerpt: "Elevate your cooking with these must-have kitchen tools that make meal prep easier and more efficient.",
      image: "https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=1000&auto=format&fit=crop",
      date: "April 10, 2023",
      author: "Sarah Chen",
      category: "Kitchen Tips"
    },
    {
      id: "seasonal-ingredients-summer",
      title: "Seasonal Ingredients to Cook With This Summer",
      excerpt: "Discover the freshest summer produce and how to incorporate these vibrant ingredients into your cooking.",
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=1000&auto=format&fit=crop",
      date: "June 2, 2023",
      author: "Miguel Rodriguez",
      category: "Seasonal Eating"
    },
    {
      id: "homemade-pasta",
      title: "The Art of Making Homemade Pasta from Scratch",
      excerpt: "Learn the techniques and secrets to creating perfect pasta dough for a truly authentic Italian experience.",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop",
      date: "May 15, 2023",
      author: "Sarah Chen",
      category: "Techniques"
    },
    {
      id: "spice-cabinet",
      title: "Organizing Your Spice Cabinet: A Comprehensive Guide",
      excerpt: "Transform your chaotic spice collection into an organized, efficient system that makes cooking more enjoyable.",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1000&auto=format&fit=crop",
      date: "March 28, 2023",
      author: "Raj Patel",
      category: "Kitchen Organization"
    }
  ];

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
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 font-playfair">The FlavorVerse Blog</h1>
              <p className="text-gray-600 max-w-2xl mx-auto font-lato">
                Tips, techniques, ingredient spotlights, and stories from the culinary world.
                Explore our articles to enhance your cooking knowledge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2 font-lato">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 font-playfair">{post.title}</h2>
                    <p className="text-gray-600 mb-4 font-lato">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-lato">By {post.author}</span>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-culinary-orange hover:text-culinary-orange/80 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="px-6 py-3 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors font-lato">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
