
export type Difficulty = "Easy" | "Medium" | "Hard";

export type RecipeCategory =
  | "Baking"
  | "Healthy"
  | "Italian"
  |  "Desert"
  | "Mexican"
  | "Asian"
  | "Mediterranean"
  | "Indian";

export interface Ingredient {
  name: string;
  quantity: string;
  unit?: string;
  notes?: string;
}

export interface EquipmentItem {
  name: string;
  notes?: string;
}

export interface RecipeStep {
  description: string;
  image?: string;
  tip?: string;
}

export interface RecipeNutrition {
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
  sugar?: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  intro: string;
  coverImage: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  difficulty: Difficulty;
  categories: RecipeCategory[];
  cuisine?: string;
  ingredients: Ingredient[];
  equipment?: EquipmentItem[];
  steps: RecipeStep[];
  tips?: string[];
  variations?: string[];
  nutrition?: RecipeNutrition;
  videoUrl?: string;
  featured?: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
