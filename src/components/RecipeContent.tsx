
import React from "react";
import { Recipe } from "@/data/types";
import { Clock, Users, ChefHat, Heart, Printer, Share2, Play, Bookmark } from "lucide-react";

interface RecipeContentProps {
  recipe: Recipe;
}

const RecipeContent: React.FC<RecipeContentProps> = ({ recipe }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Recipe Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4">
          {recipe.title}
        </h1>
        <p className="text-lg text-gray-700 font-lato mb-6">
          {recipe.intro}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-culinary-orange" />
            <div>
              <div className="text-gray-900 font-medium">Total Time</div>
              <div>{recipe.totalTime} mins</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-culinary-orange" />
            <div>
              <div className="text-gray-900 font-medium">Servings</div>
              <div>{recipe.servings}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <ChefHat className="mr-2 h-5 w-5 text-culinary-orange" />
            <div>
              <div className="text-gray-900 font-medium">Difficulty</div>
              <div>{recipe.difficulty}</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.categories.map((category) => (
            <span 
              key={category} 
              className="bg-warm-beige px-3 py-1 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
          {recipe.cuisine && (
            <span className="bg-warm-beige px-3 py-1 rounded-full text-sm">
              {recipe.cuisine}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-culinary-orange text-white rounded-md hover:bg-culinary-orange/90 transition-colors">
            <Heart size={18} />
            <span>Save</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Printer size={18} />
            <span>Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="mb-10 rounded-lg overflow-hidden">
        <img 
          src={recipe.coverImage} 
          alt={recipe.title} 
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>
      
      {/* Video (if available) */}
      {recipe.videoUrl && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold font-playfair mb-4">Watch How to Make It</h2>
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <img 
              src={recipe.coverImage} 
              alt={`${recipe.title} video thumbnail`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-culinary-orange p-5 rounded-full">
                <Play className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Recipe Content - Two Column Layout for Desktop */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Ingredients & Equipment */}
        <div className="lg:w-1/3">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4">Ingredients</h2>
            <div className="p-6 bg-warm-beige/50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-lato">Servings</span>
                <div className="flex border border-gray-300 rounded">
                  <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">-</button>
                  <span className="px-3 py-1 border-x border-gray-300">{recipe.servings}</span>
                  <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">+</button>
                </div>
              </div>
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <input 
                      type="checkbox" 
                      id={`ingredient-${index}`} 
                      className="mt-1 mr-3 h-5 w-5 text-culinary-orange rounded"
                    />
                    <label htmlFor={`ingredient-${index}`} className="text-gray-700 cursor-pointer font-lato">
                      <span className="font-medium">{ingredient.quantity} {ingredient.unit}</span> {ingredient.name}
                      {ingredient.notes && <span className="text-gray-500 italic ml-1">({ingredient.notes})</span>}
                    </label>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 text-culinary-orange hover:text-culinary-orange/80">
                  <Bookmark size={18} />
                  <span>Add ingredients to shopping list</span>
                </button>
              </div>
            </div>
          </div>
          
          {recipe.equipment && recipe.equipment.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold font-playfair mb-4">Equipment</h2>
              <div className="p-6 bg-gray-50 rounded-lg">
                <ul className="space-y-2">
                  {recipe.equipment.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 font-lato">
                      <span className="mr-2">•</span>
                      {item.name}
                      {item.notes && <span className="text-gray-500 italic ml-1">({item.notes})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Column - Instructions */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4">Instructions</h2>
            <ol className="space-y-8">
              {recipe.steps.map((step, index) => (
                <li key={index} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-culinary-orange text-white font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-4 font-lato">{step.description}</p>
                      
                      {step.tip && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                          <p className="text-blue-700 font-medium font-lato">Chef's Tip</p>
                          <p className="text-blue-600 font-lato">{step.tip}</p>
                        </div>
                      )}
                      
                      {step.image && (
                        <div className="mt-3 rounded-lg overflow-hidden">
                          <img 
                            src={step.image} 
                            alt={`Step ${index + 1}`} 
                            className="w-full h-auto max-h-[300px] object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Tips & Variations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {recipe.tips && recipe.tips.length > 0 && (
              <div className="bg-warm-beige/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 font-playfair">Tips for Success</h3>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-gray-700 font-lato">
                      <span className="text-culinary-orange mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {recipe.variations && recipe.variations.length > 0 && (
              <div className="bg-culinary-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 font-playfair">Variations</h3>
                <ul className="space-y-3">
                  {recipe.variations.map((variation, index) => (
                    <li key={index} className="flex items-start text-gray-700 font-lato">
                      <span className="text-culinary-green mr-2">•</span>
                      {variation}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Nutritional Information */}
          {recipe.nutrition && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold font-playfair mb-4">Nutritional Information</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 font-lato">Calories</div>
                  <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.calories}</div>
                </div>
                
                {recipe.nutrition.protein && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 font-lato">Protein</div>
                    <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.protein}g</div>
                  </div>
                )}
                
                {recipe.nutrition.carbs && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 font-lato">Carbs</div>
                    <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.carbs}g</div>
                  </div>
                )}
                
                {recipe.nutrition.fat && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 font-lato">Fat</div>
                    <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.fat}g</div>
                  </div>
                )}
                
                {recipe.nutrition.fiber && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 font-lato">Fiber</div>
                    <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.fiber}g</div>
                  </div>
                )}
                
                {recipe.nutrition.sugar && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 font-lato">Sugar</div>
                    <div className="text-xl font-semibold text-gray-800">{recipe.nutrition.sugar}g</div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-3 font-playfair">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer font-lato"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeContent;
