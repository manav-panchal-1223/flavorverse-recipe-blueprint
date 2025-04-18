
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const QuickTip = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 font-playfair text-culinary-green">Quick Cooking Tip</h2>
        <p className="text-gray-600 max-w-xl font-lato">Learn a simple technique to elevate your cooking game.</p>
      </div>
      
      <div className="bg-gray-100 rounded-xl overflow-hidden max-w-3xl mx-auto">
        <div className="relative">
          {/* Video would typically be hosted elsewhere and embedded properly */}
          <video 
            ref={videoRef}
            poster="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop"
            className="w-full aspect-video object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="bg-white/90 p-4 rounded-full">
              {isPlaying ? (
                <Pause className="h-8 w-8 text-culinary-orange" />
              ) : (
                <Play className="h-8 w-8 text-culinary-orange" />
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-playfair">How to Properly Chop an Onion</h3>
          <p className="text-gray-700 font-lato">
            Learn how to easily dice an onion with precision and without tears. This chef-approved technique will save you time and improve your knife skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickTip;
