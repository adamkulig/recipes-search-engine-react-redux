import * as actionTypes from '../actions/actionTypes';
import { getId } from '../../utils';

const initialState = [];

export const recipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_RECIPES_SUCCESS: {
      return state = action.items.map(item => {
        return {
          ...item,
          id: getId(),
          addedToFavorite: false
        }
      });
    }
    case actionTypes.ADD_TO_FAVORITE: {
      return state.map(item => {
        if (item.id === action.item.id && !item.addedToFavorite ) {
          return {
            ...item,
            addedToFavorite: true
          }
        }
        return item;
      })
    }
    case actionTypes.REMOVE_FROM_FAVORITE: {
      return state.map(item => {
        if (item.id === action.item.id && item.addedToFavorite) {
          return {
            ...item,
            addedToFavorite: false
          }
        } 
         return item;
      })
    }
    default:
      return state;
  }
}
