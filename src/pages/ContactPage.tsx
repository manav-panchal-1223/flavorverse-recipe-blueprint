
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };
  
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
            <h1 className="text-4xl font-bold mb-6 font-playfair text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
              <div className="md:col-span-2">
                <div className="bg-warm-beige/50 p-6 rounded-lg h-full">
                  <h2 className="text-2xl font-semibold mb-4 font-playfair">Get In Touch</h2>
                  <p className="mb-6 font-lato">
                    We'd love to hear from you! Whether you have a question about recipes, want to share your cooking 
                    experiences, or are interested in collaborating, feel free to reach out.
                  </p>
                  
                  <div className="space-y-4 font-lato">
                    <div>
                      <h3 className="font-semibold text-culinary-green">Email</h3>
                      <p>hello@flavorverse.com</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-culinary-green">Office</h3>
                      <p>123 Culinary Street</p>
                      <p>Foodie District</p>
                      <p>Flavor City, FC 12345</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-culinary-green">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" className="text-culinary-orange hover:text-rich-brown transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                {submitted ? (
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 font-playfair text-green-700">Message Sent!</h2>
                    <p className="mb-4 font-lato text-green-600">
                      Thank you for reaching out to us! We've received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-lato"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 font-playfair">Send Us a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium text-gray-700 font-lato">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary-orange focus:border-transparent font-lato"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700 font-lato">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary-orange focus:border-transparent font-lato"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 font-lato">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary-orange focus:border-transparent font-lato"
                      >
                        <option value="">Select a subject</option>
                        <option value="Recipe Question">Recipe Question</option>
                        <option value="Website Feedback">Website Feedback</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 font-medium text-gray-700 font-lato">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary-orange focus:border-transparent font-lato"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="px-6 py-3 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors font-lato"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 font-playfair text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 font-playfair">Can I submit my own recipe?</h3>
                  <p className="text-gray-700 font-lato">
                    Absolutely! We love featuring community recipes. Please use the contact form above and select "Collaboration" as the subject. Include your recipe details, and our team will review it.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 font-playfair">How can I suggest a feature for the website?</h3>
                  <p className="text-gray-700 font-lato">
                    We're always looking to improve! Send us your ideas through the contact form with "Website Feedback" as the subject. We review all suggestions and implement the ones that will best serve our community.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 font-playfair">Do you offer cooking classes or workshops?</h3>
                  <p className="text-gray-700 font-lato">
                    While we currently focus on our digital recipe platform, we occasionally host virtual cooking workshops. Subscribe to our newsletter to be notified of upcoming events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
