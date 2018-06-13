import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_FAVORITE:
      const recipe = {
        ...action.item,
        addedToFavorite: true
      }
      const duplicateRecipe = state.some(item => item.label === recipe.label && item.url === recipe.url);
      if (duplicateRecipe) {
        return state
      } else {
        return state = [...state, recipe]
      }
    case actionTypes.REMOVE_FROM_FAVORITE:
      const filteredState = state.filter(item => !(
          item.label === action.item.label 
          && item.url === action.item.url
        )
      )
      return filteredState;
    default:
      return state;
  }
}
