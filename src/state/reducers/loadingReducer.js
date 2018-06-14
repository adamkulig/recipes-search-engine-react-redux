import * as actionTypes from '../actions/actionTypes';

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_RECIPES_START:
      return state = true;
    case actionTypes.SAVE_RECIPES_SUCCESS:
      return state = false;
    case actionTypes.SAVE_RECIPES_FAIL:
      return state = false;
    default:
      return state;
  }
}
