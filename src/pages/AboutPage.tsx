
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 font-playfair text-center">About Rinny's Whisk Wonders</h1>
            
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop" 
                alt="Rinny's Whisk Wonders Team in the kitchen" 
                className="w-full h-auto object-cover max-h-[400px]"
              />
            </div>
            
            <div className="prose prose-lg max-w-none font-lato">
              <h2 className="font-playfair text-culinary-green">Our Story</h2>
              <p>
                Rinny's Whisk Wonders was born from a simple passion: making cooking accessible, enjoyable, and delicious for everyone.
                What started as a personal collection of family recipes has grown into a community of food lovers,
                home cooks, and culinary enthusiasts sharing their knowledge and creativity.
              </p>
              
              <p>
                Founded in 2020, Rinny's Whisk Wonders aims to be more than just a recipe website. We strive to create a space
                where you can find inspiration, learn new techniques, and discover the stories behind the dishes that
                bring us together around the table.
              </p>
              
              <h2 className="font-playfair text-culinary-green">Our Philosophy</h2>
              <p>
                At Rinny's Whisk Wonders, we believe that cooking should be:
              </p>
              
              <ul>
                <li>
                  <strong>Approachable</strong> - Whether you're a beginner or experienced cook, our recipes are designed
                  with clear instructions and helpful tips.
                </li>
                <li>
                  <strong>Flexible</strong> - We provide variations and substitutions because we know not everyone has the
                  same ingredients or dietary needs.
                </li>
                <li>
                  <strong>Diverse</strong> - Our collection celebrates the rich tapestry of global cuisines and cooking traditions.
                </li>
                <li>
                  <strong>Sustainable</strong> - We encourage mindful cooking that respects ingredients, reduces waste,
                  and considers environmental impact.
                </li>
              </ul>
              
              <h2 className="font-playfair text-culinary-green">Meet the Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-warm-beige/30 p-6 rounded-lg">
                  <div className="mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
                      alt="Sarah Chen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Sarah Chen</h3>
                  <p className="text-center text-gray-600 mb-3">Founder & Head Chef</p>
                  <p className="text-gray-700">
                    With 15 years of professional culinary experience and a degree from the Culinary Institute of America,
                    Sarah brings technical expertise and a passion for teaching to the Rinny's Whisk Wonders kitchen.
                  </p>
                </div>
                
                <div className="bg-warm-beige/30 p-6 rounded-lg">
                  <div className="mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                      alt="Miguel Rodriguez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Miguel Rodriguez</h3>
                  <p className="text-center text-gray-600 mb-3">Recipe Developer</p>
                  <p className="text-gray-700">
                    Miguel combines his background in food science with his family's traditional recipes to create
                    dishes that are both innovative and comforting. He specializes in Latin American cuisine and baking.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-warm-beige/30 p-6 rounded-lg">
                  <div className="mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                      alt="Aisha Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Aisha Johnson</h3>
                  <p className="text-center text-gray-600 mb-3">Food Photographer</p>
                  <p className="text-gray-700">
                    Aisha's eye for composition and light helps bring our recipes to life. Her food photography
                    captures not just how dishes look, but the emotion and experience of enjoying them.
                  </p>
                </div>
                
                <div className="bg-warm-beige/30 p-6 rounded-lg">
                  <div className="mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop" 
                      alt="Raj Patel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Raj Patel</h3>
                  <p className="text-center text-gray-600 mb-3">Nutritionist</p>
                  <p className="text-gray-700">
                    Raj ensures our recipes are not just delicious but nutritionally balanced. He provides insights
                    on dietary considerations and helps develop our collection of healthy recipes.
                  </p>
                </div>
              </div>
              
              <h2 className="font-playfair text-culinary-green">Our Testing Process</h2>
              <p>
                Every recipe on Rinny's Whisk Wonders goes through a rigorous testing process to ensure it works in your home kitchen:
              </p>
              
              <ol>
                <li>Initial development and internal testing by our recipe team</li>
                <li>Peer review by at least two other team members</li>
                <li>Home kitchen testing with various equipment and conditions</li>
                <li>Nutritional analysis and review</li>
                <li>Photography and styling</li>
                <li>Final review and publication</li>
              </ol>
              
              <p>
                We stand behind every recipe we publish and continuously update our collection based on reader feedback
                and new culinary discoveries.
              </p>
              
              <h2 className="font-playfair text-culinary-green">Join Our Community</h2>
              <p>
                Rinny's Whisk Wonders is more than a website—it's a community of people who love food. Connect with us on
                social media, subscribe to our newsletter, or reach out directly. We're always excited to hear from
                fellow food enthusiasts and home cooks!
              </p>
              
              <div className="bg-culinary-green/10 p-6 rounded-lg my-8 text-center">
                <h3 className="text-xl font-semibold mb-4 font-playfair">Get in Touch</h3>
                <p className="mb-4">
                  Have a question, suggestion, or just want to say hello? We'd love to hear from you!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
