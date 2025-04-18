
import { Recipe, RecipeCategory } from './types';

export const recipes: Recipe[] = [
  {
    id: "classic-mac-and-cheese",
    title: "Classic Baked Mac and Cheese",
    description: "The ultimate comfort food with a creamy cheese sauce and crispy breadcrumb topping.",
    intro: "There's nothing quite like homemade mac and cheese fresh out of the oven. This recipe creates the perfect balance of creamy, cheesy sauce with a crispy golden topping. It's a crowd-pleaser that both kids and adults will love! This classic dish brings warmth and comfort to any table, and the leftovers (if there are any) taste even better the next day.",
    coverImage: "https://images.unsplash.com/photo-1612152328178-4a6c50e52010?q=80&w=1000&auto=format&fit=crop",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    difficulty: "Easy",
    categories: ["Dinner", "Lunch"],
    cuisine: "American",
    ingredients: [
      { name: "elbow macaroni", quantity: "1", unit: "lb" },
      { name: "unsalted butter", quantity: "1/2", unit: "cup" },
      { name: "all-purpose flour", quantity: "1/3", unit: "cup" },
      { name: "whole milk", quantity: "3", unit: "cups" },
      { name: "sharp cheddar cheese", quantity: "3", unit: "cups", notes: "grated" },
      { name: "Gruyere cheese", quantity: "1", unit: "cup", notes: "grated" },
      { name: "salt", quantity: "1/2", unit: "tsp" },
      { name: "black pepper", quantity: "1/4", unit: "tsp" },
      { name: "nutmeg", quantity: "1/8", unit: "tsp", notes: "freshly grated" },
      { name: "bread crumbs", quantity: "1", unit: "cup", notes: "panko preferred" },
      { name: "Parmesan cheese", quantity: "1/4", unit: "cup", notes: "grated" },
      { name: "butter", quantity: "2", unit: "tbsp", notes: "melted" }
    ],
    equipment: [
      { name: "9x13 inch baking dish" },
      { name: "Large pot for boiling pasta" },
      { name: "Medium saucepan" },
      { name: "Whisk" },
      { name: "Colander" }
    ],
    steps: [
      {
        description: "Preheat your oven to 375°F (190°C) and lightly grease a 9x13 inch baking dish.",
      },
      {
        description: "Bring a large pot of salted water to a boil. Add the macaroni and cook according to package directions until al dente, about 8 minutes. Drain well.",
        image: "https://images.unsplash.com/photo-1621274283140-e8df3b555c11?q=80&w=500&auto=format&fit=crop",
        tip: "Don't overcook the pasta as it will continue to cook in the oven."
      },
      {
        description: "In a medium saucepan, melt butter over medium heat. Add flour and whisk constantly for about 1 minute to create a roux.",
        image: "https://images.unsplash.com/photo-1620100214595-2c9a4d239fa2?q=80&w=500&auto=format&fit=crop"
      },
      {
        description: "Gradually whisk in the milk and continue cooking, whisking constantly until the mixture thickens, about 5 minutes.",
      },
      {
        description: "Remove from heat and stir in the cheddar and Gruyere cheeses until melted and smooth. Season with salt, pepper, and nutmeg.",
        image: "https://images.unsplash.com/photo-1637082548982-91f2e3abe571?q=80&w=500&auto=format&fit=crop",
        tip: "For a silky smooth sauce, grate your own cheese rather than using pre-shredded."
      },
      {
        description: "Add the cooked macaroni to the cheese sauce and stir to combine. Pour into the prepared baking dish.",
      },
      {
        description: "In a small bowl, combine the bread crumbs, Parmesan cheese, and melted butter. Sprinkle the mixture evenly over the mac and cheese.",
      },
      {
        description: "Bake in the preheated oven until the top is golden and the edges are bubbling, about 25-30 minutes.",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=500&auto=format&fit=crop"
      },
      {
        description: "Let stand for 5 minutes before serving.",
      }
    ],
    tips: [
      "For extra flavor, add a teaspoon of mustard powder or a dash of hot sauce to the cheese sauce.",
      "This dish can be assembled ahead of time and refrigerated. Add 10-15 minutes to the baking time if cooking from cold.",
      "Substitute different cheeses based on your preference - monterey jack, colby, or fontina all work well."
    ],
    variations: [
      "Add cooked bacon or ham for a meaty version.",
      "Mix in steamed broccoli or peas for added vegetables.",
      "For a spicy kick, add diced jalapeños or a pinch of cayenne pepper."
    ],
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 40,
      fat: 25,
      fiber: 1,
      sugar: 5
    },
    videoUrl: "https://www.youtube.com/watch?v=FUeyrEN14Rk",
    featured: true,
    tags: ["pasta", "cheese", "comfort food", "baked", "family dinner"],
    createdAt: "2023-01-15T08:00:00Z",
    updatedAt: "2023-01-15T08:00:00Z"
  },
  {
    id: "lemon-herb-salmon",
    title: "Lemon Herb Baked Salmon",
    description: "Light, healthy, and bursting with fresh flavors - ready in just 20 minutes!",
    intro: "This simple yet elegant salmon dish is perfect for busy weeknights when you need something nutritious and delicious on the table quickly. The bright flavors of lemon and fresh herbs complement the rich salmon perfectly, while the quick cooking time ensures the fish stays moist and tender. This recipe is not only healthy but also impressive enough for guests!",
    coverImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 4,
    difficulty: "Easy",
    categories: ["Dinner", "Quick Meals", "Healthy"],
    cuisine: "Mediterranean",
    ingredients: [
      { name: "salmon fillets", quantity: "4", unit: "6oz pieces", notes: "skin-on preferred" },
      { name: "olive oil", quantity: "2", unit: "tbsp" },
      { name: "lemon", quantity: "1", unit: "", notes: "half juiced, half sliced" },
      { name: "garlic", quantity: "3", unit: "cloves", notes: "minced" },
      { name: "fresh dill", quantity: "2", unit: "tbsp", notes: "chopped" },
      { name: "fresh parsley", quantity: "2", unit: "tbsp", notes: "chopped" },
      { name: "salt", quantity: "1/2", unit: "tsp" },
      { name: "black pepper", quantity: "1/4", unit: "tsp" },
      { name: "cherry tomatoes", quantity: "1", unit: "cup", notes: "halved (optional)" },
      { name: "capers", quantity: "1", unit: "tbsp", notes: "drained (optional)" }
    ],
    equipment: [
      { name: "Baking sheet" },
      { name: "Parchment paper" },
      { name: "Small bowl for mixing marinade" }
    ],
    steps: [
      {
        description: "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      },
      {
        description: "In a small bowl, mix together olive oil, lemon juice, minced garlic, half of the dill, half of the parsley, salt, and pepper.",
        image: "https://images.unsplash.com/photo-1592175614323-4889586d606b?q=80&w=500&auto=format&fit=crop"
      },
      {
        description: "Place the salmon fillets skin-side down on the prepared baking sheet. Brush the olive oil mixture over the salmon.",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=500&auto=format&fit=crop",
        tip: "Pat the salmon dry with paper towels before adding the marinade to help it adhere better."
      },
      {
        description: "Top the salmon with lemon slices, and if using, scatter cherry tomatoes and capers around the fillets.",
      },
      {
        description: "Bake in the preheated oven until the salmon is just cooked through and flakes easily with a fork, about 12-15 minutes depending on thickness.",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=500&auto=format&fit=crop",
        tip: "For perfectly cooked salmon, look for an internal temperature of 145°F (63°C) or when the fish changes from translucent to opaque."
      },
      {
        description: "Sprinkle with the remaining fresh herbs before serving.",
      }
    ],
    tips: [
      "For extra flavor, you can marinate the salmon in the refrigerator for up to 30 minutes before baking.",
      "If you don't have fresh herbs, use 1 teaspoon each of dried herbs instead.",
      "Serve with a side of roasted asparagus or a simple green salad for a complete meal."
    ],
    variations: [
      "Add a tablespoon of honey to the marinade for a touch of sweetness.",
      "Sprinkle with a pinch of red pepper flakes for a little heat.",
      "Replace the dill and parsley with fresh thyme and rosemary for a different herb profile."
    ],
    nutrition: {
      calories: 280,
      protein: 34,
      carbs: 2,
      fat: 15,
      fiber: 0,
      sugar: 1
    },
    videoUrl: "https://www.youtube.com/watch?v=2uYJufFU8xo",
    featured: true,
    tags: ["seafood", "quick dinner", "low-carb", "mediterranean", "high-protein"],
    createdAt: "2023-02-10T15:30:00Z",
    updatedAt: "2023-02-10T15:30:00Z"
  },
  {
    id: "chocolate-chip-cookies",
    title: "Perfect Chocolate Chip Cookies",
    description: "Soft and chewy on the inside, crispy on the edges, with gooey chocolate chunks.",
    intro: "These aren't just any chocolate chip cookies - they're the perfect balance of soft centers and crispy edges, studded with pools of melted chocolate. The secret lies in high-quality ingredients and a few special techniques. Whether you're an experienced baker or trying your hand at cookies for the first time, this foolproof recipe will give you bakery-quality results right from your home oven. Make a batch and watch them disappear!",
    coverImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop",
    prepTime: 20,
    cookTime: 12,
    totalTime: 32,
    servings: 24,
    difficulty: "Medium",
    categories: ["Dessert", "Baking"],
    cuisine: "American",
    ingredients: [
      { name: "all-purpose flour", quantity: "2 1/4", unit: "cups" },
      { name: "baking soda", quantity: "1", unit: "tsp" },
      { name: "salt", quantity: "1", unit: "tsp" },
      { name: "unsalted butter", quantity: "1", unit: "cup", notes: "room temperature" },
      { name: "granulated sugar", quantity: "3/4", unit: "cup" },
      { name: "brown sugar", quantity: "3/4", unit: "cup", notes: "packed" },
      { name: "vanilla extract", quantity: "2", unit: "tsp" },
      { name: "large eggs", quantity: "2", unit: "" },
      { name: "semi-sweet chocolate chips", quantity: "1 1/2", unit: "cups" },
      { name: "dark chocolate chunks", quantity: "1/2", unit: "cup", notes: "optional" },
      { name: "chopped walnuts or pecans", quantity: "1", unit: "cup", notes: "optional" }
    ],
    equipment: [
      { name: "Stand mixer or hand mixer" },
      { name: "Mixing bowls" },
      { name: "Baking sheets" },
      { name: "Parchment paper" },
      { name: "Cooling rack" }
    ],
    steps: [
      {
        description: "In a medium bowl, whisk together the flour, baking soda, and salt. Set aside.",
      },
      {
        description: "In a large bowl or stand mixer, beat the butter until creamy, about 1 minute. Add both sugars and beat on medium speed until light and fluffy, about 2-3 minutes.",
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=500&auto=format&fit=crop",
        tip: "Don't skimp on this step! Proper creaming incorporates air into the dough for a better texture."
      },
      {
        description: "Add vanilla and eggs one at a time, beating well after each addition.",
      },
      {
        description: "Gradually add the flour mixture to the wet ingredients, mixing on low speed just until combined. Do not overmix.",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=500&auto=format&fit=crop",
        tip: "Overmixing develops gluten, which can make your cookies tough. Stop mixing as soon as no dry flour is visible."
      },
      {
        description: "Fold in the chocolate chips and chunks (plus nuts if using) with a rubber spatula.",
      },
      {
        description: "Cover the dough and refrigerate for at least 1 hour, or up to 3 days. This allows the flavors to develop and prevents spreading.",
        tip: "For even better flavor, let the dough rest overnight in the refrigerator."
      },
      {
        description: "When ready to bake, preheat your oven to 350°F (175°C) and line baking sheets with parchment paper.",
      },
      {
        description: "Scoop dough into balls, about 2 tablespoons each, and place on the prepared baking sheets about 2 inches apart.",
        image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=500&auto=format&fit=crop",
      },
      {
        description: "Bake for 10-12 minutes, or until edges are set and lightly golden but centers still look slightly underdone.",
        image: "https://images.unsplash.com/photo-1590080876146-e2179b237f4f?q=80&w=500&auto=format&fit=crop",
        tip: "For bakery-style cookies, press a few extra chocolate chips onto the tops of the cookies right after they come out of the oven!"
      },
      {
        description: "Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
      }
    ],
    tips: [
      "Use a kitchen scale for most accurate measurements, especially for flour.",
      "For extra flavor, try browning half the butter before creaming it with the sugar.",
      "The dough freezes well! Roll into balls and freeze on a baking sheet, then transfer to a freezer bag. Bake from frozen, adding 1-2 minutes to the baking time."
    ],
    variations: [
      "Add 1/2 cup of peanut butter chips or butterscotch chips for a flavor twist.",
      "Substitute gluten-free flour blend 1:1 for traditional all-purpose flour.",
      "Try sprinkling a little flaky sea salt on top of cookies just before baking."
    ],
    nutrition: {
      calories: 210,
      protein: 2,
      carbs: 27,
      fat: 11,
      fiber: 1,
      sugar: 18
    },
    videoUrl: "https://www.youtube.com/watch?v=rEdl2Uetpvo",
    featured: true,
    tags: ["cookies", "dessert", "baking", "chocolate", "kid-friendly"],
    createdAt: "2023-03-05T10:15:00Z",
    updatedAt: "2023-03-05T10:15:00Z"
  },
  {
    id: "veggie-stir-fry",
    title: "Quick Vegetable Stir Fry",
    description: "A vibrant, nutritious stir fry loaded with fresh vegetables and a savory sauce.",
    intro: "This colorful veggie stir fry is the perfect solution for busy weeknights when you need a healthy meal in minutes. Packed with crisp-tender vegetables and tossed in a flavorful sauce, it's both nutritious and satisfying. Easily customizable with whatever vegetables you have on hand, this versatile dish can be served over rice, noodles, or enjoyed on its own for a lighter option.",
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: "Easy",
    categories: ["Dinner", "Quick Meals", "Vegetarian", "Healthy", "Vegan"],
    cuisine: "Asian",
    ingredients: [
      { name: "broccoli florets", quantity: "2", unit: "cups" },
      { name: "red bell pepper", quantity: "1", unit: "", notes: "sliced" },
      { name: "carrots", quantity: "2", unit: "medium", notes: "julienned" },
      { name: "snap peas", quantity: "1", unit: "cup" },
      { name: "shiitake mushrooms", quantity: "1", unit: "cup", notes: "sliced" },
      { name: "garlic", quantity: "3", unit: "cloves", notes: "minced" },
      { name: "fresh ginger", quantity: "1", unit: "tbsp", notes: "grated" },
      { name: "green onions", quantity: "3", unit: "", notes: "sliced, whites and greens separated" },
      { name: "vegetable oil", quantity: "2", unit: "tbsp" },
      { name: "soy sauce", quantity: "3", unit: "tbsp", notes: "use tamari for gluten-free" },
      { name: "rice vinegar", quantity: "1", unit: "tbsp" },
      { name: "sesame oil", quantity: "1", unit: "tsp" },
      { name: "brown sugar or honey", quantity: "1", unit: "tsp" },
      { name: "cornstarch", quantity: "1", unit: "tsp" },
      { name: "water", quantity: "2", unit: "tbsp" },
      { name: "sesame seeds", quantity: "1", unit: "tbsp", notes: "for garnish" },
      { name: "red pepper flakes", quantity: "1/4", unit: "tsp", notes: "optional, for heat" }
    ],
    equipment: [
      { name: "Wok or large skillet" },
      { name: "Sharp knife" },
      { name: "Cutting board" },
      { name: "Small bowl for sauce" }
    ],
    steps: [
      {
        description: "Prepare all vegetables before you start cooking, as stir-frying goes quickly. Keep similar vegetables together based on cooking time.",
        image: "https://images.unsplash.com/photo-1546549044-8d0c27583eda?q=80&w=500&auto=format&fit=crop",
        tip: "Cut vegetables in uniform sizes to ensure even cooking."
      },
      {
        description: "In a small bowl, mix soy sauce, rice vinegar, sesame oil, and brown sugar. In another small bowl, stir cornstarch with water to make a slurry. Set both aside.",
      },
      {
        description: "Heat a wok or large skillet over high heat. Add 1 tablespoon of vegetable oil and swirl to coat.",
        tip: "Your pan should be very hot before adding ingredients - this is key for stir-frying!"
      },
      {
        description: "Add the firmer vegetables first (broccoli and carrots). Stir-fry for about 2 minutes until they begin to soften but are still crisp.",
        image: "https://images.unsplash.com/photo-1625944526541-131efffdab57?q=80&w=500&auto=format&fit=crop"
      },
      {
        description: "Add the bell pepper, snap peas, and mushrooms. Stir-fry for another 2 minutes.",
      },
      {
        description: "Push vegetables to the sides of the wok creating a space in the center. Add remaining 1 tablespoon oil to this space.",
      },
      {
        description: "Add minced garlic, grated ginger, and white parts of green onions to the center. Stir-fry for 30 seconds until fragrant.",
        image: "https://images.unsplash.com/photo-1506368670575-2ecb8dd6d86e?q=80&w=500&auto=format&fit=crop",
        tip: "Be careful not to burn the garlic and ginger as they can become bitter."
      },
      {
        description: "Mix the aromatics with the vegetables, then pour in the soy sauce mixture. Stir well to coat.",
      },
      {
        description: "Give the cornstarch slurry a quick stir and add it to the wok. Cook, stirring constantly, until the sauce thickens slightly, about 1 minute.",
      },
      {
        description: "Remove from heat and sprinkle with sesame seeds, green parts of green onions, and red pepper flakes if using.",
      }
    ],
    tips: [
      "Prep all ingredients before heating your wok - stir-frying moves too quickly to prep as you go.",
      "Don't overcrowd your pan - cook in batches if necessary for better results.",
      "For a protein boost, add tofu, tempeh, or edamame."
    ],
    variations: [
      "Add 1 tablespoon of peanut butter to the sauce for a nutty flavor.",
      "Substitute different vegetables based on what's in season or what you have available.",
      "Serve over brown rice, quinoa, or rice noodles to make it a complete meal."
    ],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 20,
      fat: 10,
      fiber: 6,
      sugar: 8
    },
    featured: false,
    tags: ["stir-fry", "vegetables", "quick dinner", "asian-inspired", "plant-based"],
    createdAt: "2023-04-18T14:20:00Z",
    updatedAt: "2023-04-18T14:20:00Z"
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
