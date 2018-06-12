// const kcalFilled = (kcal.length > 0 ) && `&calories=${kcal}`;
// const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${ingredients}&${kcalFilled}`;

const recipeSelectedInfo = (json) => json.hits.map(
  hit => ({
    label: hit.recipe.label,
    image: hit.recipe.image,
    url: hit.recipe.url,
    img: hit.recipe.image,
    calories: Math.floor(hit.recipe.calories),
    totalTime: hit.recipe.totalTime,
    ingredients: hit.recipe.ingredientLines
  }));

export const fetchRecipes = (url) => 
  fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(recipeSelectedInfo);
