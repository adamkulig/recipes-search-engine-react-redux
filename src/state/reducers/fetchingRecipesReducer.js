import * as actionTypes from '../actions/actionTypes';

const initialState = [{
  loadingRecipes: false
}];

export const fetchingRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_RECIPES_START:
      return {
        loadingRecipes: true
      }
    case actionTypes.SAVE_RECIPES_SUCCESS:
      return {
        loadingRecipes: false
      }
    case actionTypes.SAVE_RECIPES_FAIL:
      return {
        loadingRecipes: false
      }
    default:
      return state;
  }
}
