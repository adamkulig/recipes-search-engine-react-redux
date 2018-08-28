import * as actionTypes from './actionTypes';
import { fetchRecipes } from '../../api/fetch';
import { APP_ID, APP_KEY } from '../../api/passwords';

export const saveRecipes = (ingredients, kcal, numberOfRecipes = 0, isNewSearch = true) => dispatch => {
    dispatch(saveRecipesStart(ingredients, kcal, isNewSearch));
    const firstRecipe = numberOfRecipes;
    const lastRecipe = firstRecipe + 10;
    const kcalFilled = kcal.length > 0 && `&calories=${kcal}`;
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=${firstRecipe}&to=${lastRecipe}&q=${ingredients}&${kcalFilled}`;
    fetchRecipes(url)
      .then(json => dispatch(saveRecipesSuccess(json, isNewSearch)))
      .catch(error => dispatch(saveRecipesFail(error)))
  };


export const saveRecipesStart = (ingredients, kcal) => {
  return {
    type: actionTypes.SAVE_RECIPES_START,
    ingredients,
    kcal,
  }
}

export const saveRecipesSuccess = (items, isNewSearch) => {
  return {
    type: actionTypes.SAVE_RECIPES_SUCCESS,
    items,
    isNewSearch
  }
}

export const saveRecipesFail = (error) => {
  return {
    type: actionTypes.SAVE_RECIPES_FAIL,
    error
  }
}

export const addToFavorite = (item) => {
  return {
    type: actionTypes.ADD_TO_FAVORITE,
    item
  }
}

export const removeFromFavorite = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITE,
    item
  }
}
