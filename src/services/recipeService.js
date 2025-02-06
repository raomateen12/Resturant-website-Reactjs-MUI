
const API_KEY = "9b149a6b43msheee380e13e74e1fp1df956jsn9ef70bc47045"
const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

export const fetchRecipes = async (tags = [], number = 12) => {
  try {
    const tagsString = tags.length ? `&tags=${tags.join(',')}` : '';
    const response = await fetch(
      `${BASE_URL}/recipes/random?number=${number}${tagsString}`,
      options
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/recipes/${id}/information`,
      options
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
}; 