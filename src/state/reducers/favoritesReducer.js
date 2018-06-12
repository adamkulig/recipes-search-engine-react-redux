import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_FAVORITE:
      const recipe = {
        ...action.item,
        addedToFavorite: true
      }
      state.map(item => {
        const theSameRecipe = (
          item.title === recipe.title 
          && item.ingredients === recipe.ingredients
        )
        if (theSameRecipe) {
          return state;
        }
      })
      return state = [...state, recipe];
    case actionTypes.REMOVE_FROM_FAVORITE:
      return state = state.filter(item => !(
          item.title === action.item.title 
          && item.ingredients === action.item.ingredients
        )
      )
    default:
      return state;
  }
}
