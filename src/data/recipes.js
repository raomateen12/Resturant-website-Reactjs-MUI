export const recipes = [
  {
    id: 1,
    title: "Vegetarian Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800",
    readyInMinutes: 45,
    servings: 4,
    pricePerServing: 2.5,
    diets: ["vegetarian", "italian"],
    instructions: "1. Prepare the dough\n2. Add toppings\n3. Bake at 450°F for 15 minutes",
    extendedIngredients: [
      { id: 1, original: "2 cups all-purpose flour" },
      { id: 2, original: "1 cup tomato sauce" },
      { id: 3, original: "2 cups mozzarella cheese" },
      { id: 4, original: "1 bell pepper, sliced" },
      { id: 5, original: "1 cup mushrooms, sliced" }
    ],
    description: "Classic vegetarian pizza with fresh vegetables and melted cheese"
  },
  {
    id: 2,
    title: "Vegan Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",
    readyInMinutes: 30,
    servings: 2,
    pricePerServing: 3.8,
    diets: ["vegan", "gluten free"],
    instructions: "1. Cook quinoa\n2. Roast vegetables\n3. Prepare sauce\n4. Assemble bowl",
    extendedIngredients: [
      { id: 6, original: "1 cup quinoa" },
      { id: 7, original: "1 sweet potato, cubed" },
      { id: 8, original: "1 cup chickpeas" },
      { id: 9, original: "2 cups kale" },
      { id: 10, original: "1/4 cup tahini sauce" }
    ],
    description: "Healthy and filling vegan bowl with quinoa and roasted vegetables"
  },
  {
    id: 3,
    title: "Gluten-Free Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800",
    readyInMinutes: 60,
    servings: 8,
    pricePerServing: 2.0,
    diets: ["gluten free", "vegetarian"],
    instructions: "1. Mix dry ingredients\n2. Add wet ingredients\n3. Bake at 350°F for 35 minutes",
    extendedIngredients: [
      { id: 11, original: "2 cups almond flour" },
      { id: 12, original: "1/2 cup cocoa powder" },
      { id: 13, original: "3 eggs" },
      { id: 14, original: "1 cup sugar" },
      { id: 15, original: "1 tsp vanilla extract" }
    ],
    description: "Rich and moist chocolate cake that's completely gluten-free"
  },
  {
    id: 4,
    title: "Keto Salmon Bowl",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800",
    readyInMinutes: 25,
    servings: 2,
    pricePerServing: 6.5,
    diets: ["ketogenic", "pescetarian"],
    instructions: "1. Cook salmon\n2. Prepare vegetables\n3. Make dressing\n4. Assemble bowl",
    extendedIngredients: [
      { id: 16, original: "2 salmon fillets" },
      { id: 17, original: "2 cups mixed greens" },
      { id: 18, original: "1 avocado" },
      { id: 19, original: "1/4 cup olive oil" },
      { id: 20, original: "2 tbsp lemon juice" }
    ],
    description: "Low-carb salmon bowl perfect for keto diet"
  }
]; 