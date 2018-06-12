// place for reducers connection
import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer';
import { favoritesReducer } from './favoritesReducer';
import { fetchingRecipesReducer } from './fetchingRecipesReducer';

export const rootReducer = combineReducers ({
  recipes: recipesReducer,
  favorites: favoritesReducer,
  fetchingRecipes: fetchingRecipesReducer
});