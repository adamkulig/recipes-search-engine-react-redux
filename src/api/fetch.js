const pullingSelectedData = (json) => json.hits.map(
  hit => ({
    label: hit.recipe.label,
    image: hit.recipe.image,
    url: hit.recipe.url,
    img: hit.recipe.image,
    calories: Math.floor(hit.recipe.calories),
    totalTime: hit.recipe.totalTime,
    ingredients: hit.recipe.ingredientLines
  })
);

export const fetchRecipes = (url) => 
  fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(pullingSelectedData);
