import * as actionTypes from '../actions/actionTypes';

const initialState = {
  spinnerIsWorking: false,
  ingredients: '',
  kcal: '',
};

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_RECIPES_START:
      return state = {
        spinnerIsWorking: true,
        ingredients: action.ingredients,
        kcal: action.kcal,
      };
    case actionTypes.SAVE_RECIPES_SUCCESS:
      return state = {
        ...state,
        spinnerIsWorking: false,
      };
    case actionTypes.SAVE_RECIPES_FAIL:
      return state = {
        ...state,
        spinnerIsWorking: false,
      };
    default:
      return state;
  }
}
