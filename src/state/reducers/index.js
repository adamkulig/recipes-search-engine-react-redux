// place for reducers connection
import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer';
import { favoritesReducer } from './favoritesReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers ({
  recipes: recipesReducer,
  favorites: favoritesReducer,
  loading: loadingReducer
});
