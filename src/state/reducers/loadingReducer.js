import * as actionTypes from '../actions/actionTypes';

const initialState = {
  spinner: false,
  ingredients: '',
  kcal: '',
};

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_RECIPES_START:
      return state = {
        spinner: true,
        ingredients: action.ingredients,
        kcal: action.kcal,
      };
    case actionTypes.SAVE_RECIPES_SUCCESS:
      return state = {
        ...state,
        spinner: false,
      };
    case actionTypes.SAVE_RECIPES_FAIL:
      return state = {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
