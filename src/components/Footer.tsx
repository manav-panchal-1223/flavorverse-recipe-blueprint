
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-beige py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-culinary-orange">
                Rinny's Whisk Wonders
              </span>
            </Link>
            <p className="mt-4 text-sm text-foreground/80 font-lato">
              Your daily dose of delicious recipes, cooking tips, and culinary inspiration.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Recipes</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link to="/categories/breakfast" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/categories/lunch" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/categories/dinner" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/categories/desserts" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/categories/vegan" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Vegan
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/80 hover:text-culinary-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Subscribe</h3>
            <p className="text-sm text-foreground/80 mb-4 font-lato">
              Get our latest recipes and cooking tips delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary-orange font-lato"
              />
              <button
                className="bg-culinary-orange hover:bg-culinary-orange/90 text-white font-medium py-2 px-4 rounded-md transition-colors font-lato"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-foreground/60 font-lato">
          <p>© {new Date().getFullYear()} Rinny's Whisk Wonders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
