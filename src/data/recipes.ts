
import { Recipe, RecipeCategory } from './types';

export const recipes: Recipe[] = [
  {
    id: "homemade-pistachio-baklava",
    "title": "Homemade Pistachio Baklava",
    "description": "A crispy, sweet pastry dessert featuring layers of phyllo dough filled with chopped pistachios and soaked in honey syrup.",
    "intro": "This traditional Mediterranean dessert features crisp layers of phyllo pastry filled with chopped pistachios and soaked in a honey-lemon syrup. The contrast between the room temperature syrup poured over hot baklava creates the perfect texture - crispy yet delicately sweet. This impressive dessert is perfect for special occasions or whenever you crave something uniquely delicious.",
    "coverImage": "https://media-hosting.imagekit.io/bd66ab9691004f41/omer-haktan-bulut-Z8nrygSBcLE-unsplash.jpg?Expires=1840495893&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Bua3TFbzhGHBiFUZReMPz4v2FTYUXBHmNG5MXZAYuvfO1DsPA-xIIDGPUIrkLGYG5cGlspKBA6BWdRI6dv7I0vQpUVloNElnUmqW0yrlPL5liT3UtwYANN1b8jNbrT1j5YzjwnqDwOlEf4xDPQNakYtbirjLwj6MbS23diW0tJgSCaDjrf2WI1o3MvsHzqoh9eoyzO4Z12QsYNR3YBSzsILQDxPp6g5V3aJD57h~cUvd5IxpO~nIp2GyKRKwM5wp0kk8ZWL1DzBiF0y0fwtp-40QqXrZDLSE8r0DYxUFaSpk37VmSkZG4xhB98h-2HCp5hfRUSYgYHcJv4OBAwQukw__",
    "prepTime": 30,
    "cookTime": 40,
    "totalTime": 70,
    "servings": 24,
    "difficulty": "Medium",
    "categories": [],
    "cuisine": "Mediterranean",
    "ingredients": [
      { "name": "phyllo pastry sheets", "quantity": "1", "unit": "package", "notes": "preferably Athens or Wegmans brand" },
      { "name": "unsalted pistachios", "quantity": "2", "unit": "cups", "notes": "chopped" },
      { "name": "ghee", "quantity": "1", "unit": "cup", "notes": "melted (or unsalted butter)" },
      { "name": "sugar", "quantity": "1", "unit": "cup" },
      { "name": "water", "quantity": "¾", "unit": "cup" },
      { "name": "honey", "quantity": "1", "unit": "tbsp" },
      { "name": "lemon juice", "quantity": "1", "unit": "tsp" }
    ],
    "equipment": [
      { "name": "9x13 inch baking pan" },
      { "name": "Saucepan" },
      { "name": "Pastry brush" },
      { "name": "Sharp knife" }
    ],
    "steps": [
      {
        "description": "In a saucepan, combine sugar, water, and honey to prepare the syrup."
      },
      {
        "description": "Bring the syrup mixture to a boil and let it simmer for 10 minutes.",
        "tip": "Keep an eye on it to prevent it from boiling over."
      },
      {
        "description": "Stir in the lemon juice, then remove from heat and allow the syrup to cool completely to room temperature.",
        "tip": "This is important to keep your baklava crispy!"
      },
      {
        "description": "Preheat your oven to 350°F (175°C)."
      },
      {
        "description": "Brush the bottom and sides of a 9x13 inch baking pan with melted ghee."
      },
      {
        "description": "Place one sheet of phyllo pastry into the pan. Lightly brush it with ghee. Repeat this step until you have 14 layers.",
        "tip": "Keep unused phyllo sheets covered with a damp towel to prevent them from drying out."
      },
      {
        "description": "Spread half of the chopped pistachios evenly over the layered phyllo."
      },
      {
        "description": "Add 5 more phyllo sheets, brushing each with ghee as you go."
      },
      {
        "description": "Spread the remaining pistachios over the top."
      },
      {
        "description": "Layer another 14 sheets of phyllo, again brushing each sheet with ghee."
      },
      {
        "description": "Using a sharp knife, score the top into diamond or square shapes."
      },
      {
        "description": "Bake at 350°F (175°C) for about 40 minutes, or until golden brown and crisp.",
        "image": "https://media-hosting.imagekit.io/c02802578b3e4d99/Baklava-Recipe-3199.jpg?Expires=1840496505&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0-zx~hMUnnKrlp7PGidn8VkPZz7-Dg2xGXNm5tuXxkLfCxKtq8MHLZt8T7Fndzpw~vf6sC0IPk4cOIAj0v9Ma0zvQ3IWsuvsUP6jFm7z7iZvL0fZpfs~g3PJF7IYjej1Fhkmf9CtJT0R~YYF0szf7nnA02O8Dz-Bd7RMhRxxjW4LiWFg~0lYbf3k9igMth35WX5emzMsrkg54JZusaGZXbZpFymCpCShYhh5cyZSwzJ0NyHpc~2NDJvXbWCUrGG7FK0M2Y0oeXKProorwEvIj7hjx9RsU49IyYkF2~q76YXptsNrHApPehy8xUuGfJ9ZAQYIxGKOH0F126u1E64g~Q__"
      },
      {
        "description": "As soon as the baklava comes out of the oven, immediately pour the room temperature syrup evenly over the hot baklava.",
        "tip": "The contrast between hot baklava and cool syrup is key to the perfect texture."
      },
      {
        "description": "Let it soak and rest for at least 1 hour at room temperature before serving."
      }
    ],
    "tips": [
      "Always use cooled syrup on hot baklava — this contrast helps it stay crispy.",
      "Keep the unused phyllo sheets covered with a damp towel while working to prevent them from drying out.",
      "Store at room temperature, uncovered or loosely covered, to maintain crispness.",
      "For a different flavor, try adding a cinnamon stick or cardamom pods to the syrup while simmering."
    ],
    "variations": [
      "Use walnuts or a mixture of nuts instead of pistachios.",
      "Add a teaspoon of rose water or orange blossom water to the syrup for a floral note.",
      "Create a chocolate version by adding cocoa powder to the nut mixture."
    ],
    "nutrition": {
      "calories": 210,
      "protein": 3,
      "carbs": 20,
      "fat": 14,
      "fiber": 1,
      "sugar": 12
    },
    "videoUrl": "https://www.youtube.com/watch?v=bVNKOC5Kx3Y",
    "featured": true,
    "tags": ["baklava", "pistachios", "mediterranean", "dessert", "honey"],
    "createdAt": "2023-05-20T08:00:00Z",
    "updatedAt": "2023-05-20T08:00:00Z"
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByCategory = (category: RecipeCategory): Recipe[] => {
  return recipes.filter(recipe => recipe.categories.includes(category));
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getLatestRecipes = (count: number = 3): Recipe[] => {
  return [...recipes]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowerCaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowerCaseQuery) ||
    recipe.description.toLowerCase().includes(lowerCaseQuery) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    recipe.categories.some(category => category.toLowerCase().includes(lowerCaseQuery)) ||
    recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(lowerCaseQuery))
  );
};
