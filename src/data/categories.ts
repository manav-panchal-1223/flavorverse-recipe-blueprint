
import { RecipeCategory } from './types';

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  recipeCount: number;
}

export const categories: Category[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Start your day with these delicious breakfast recipes",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f10a081a?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 12
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Quick and satisfying lunch ideas for busy days",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 18
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Comforting dinner recipes your whole family will love",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 24
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet treats to satisfy your cravings",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 16
  },
  {
    id: "quick-meals",
    title: "Quick Meals",
    description: "Ready in 30 minutes or less",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 15
  },
  {
    id: "healthy",
    title: "Healthy",
    description: "Nutritious and delicious recipes for a balanced lifestyle",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 20
  },
  {
    id: "vegan",
    title: "Vegan",
    description: "Plant-based recipes packed with flavor",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 14
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    description: "Meat-free dishes that don't compromise on taste",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 18
  },
  {
    id: "baking",
    title: "Baking",
    description: "From bread to pastries and everything in between",
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 12
  },
  {
    id: "italian",
    title: "Italian",
    description: "Classic Italian recipes from pasta to pizza",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 10
  },
  {
    id: "mexican",
    title: "Mexican",
    description: "Vibrant Mexican flavors to spice up your meals",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 8
  },
  {
    id: "asian",
    title: "Asian",
    description: "Explore the diverse flavors of Asian cuisine",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1000&auto=format&fit=crop",
    recipeCount: 15
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
