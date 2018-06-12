import * as actionTypes from './actionTypes';
import { fetchRecipes } from '../../api/fetch';
import { APP_ID, APP_KEY } from '../../api/passwords';

export const saveRecipes = (ingredients, kcal) => {
  return dispatch => {
    dispatch(saveRecipesStart());
    const kcalFilled = (kcal.length > 0 ) && `&calories=${kcal}`;
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${ingredients}&${kcalFilled}`;
    fetchRecipes(url)
      .then(json => dispatch(saveRecipesSuccess(json)))
      .catch(error => dispatch(saveRecipesFail(error)))
  }
}

export const saveRecipesStart = () => {
  return {
    type: actionTypes.SAVE_RECIPES_START,
  }
}

export const saveRecipesSuccess = (items) => {
  return {
    type: actionTypes.SAVE_RECIPES_SUCCESS,
    items
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
