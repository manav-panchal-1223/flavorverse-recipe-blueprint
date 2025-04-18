
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  large?: boolean;
}

const SearchBar = ({ className = "", placeholder = "Search for recipes...", large = false }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pr-10 pl-4 ${large ? 'py-4 text-lg' : 'py-2'} rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-culinary-orange font-lato`}
          placeholder={placeholder}
        />
        <button
          type="submit"
          className={`absolute ${large ? 'right-4 top-4' : 'right-3 top-2.5'} text-gray-400 hover:text-culinary-orange`}
        >
          <Search size={large ? 24 : 20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
