import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { IoIosStar, IoIosStarOutline } from 'react-icons/lib/io';
import './RecipeDetails.scss';
import * as actionCreators from '../../state/actions/index';
import { Anchor } from '../../components/Anchor/Anchor'; 

export class RecipeDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getRecipe = (recipeId) => {
    const { recipes, favorites } = this.props;
    let recipe = recipes.find(item => item.id === Number(recipeId));
    if (!recipe){
      recipe = favorites.find(item => item.id === Number(recipeId));
    }
    return recipe;
  }

  render(){
    const { match: { params: { id: recipeId } } } = this.props; 
    const recipe = this.getRecipe(recipeId);
    if(!recipe) {
      return null;
    }
    const { label, ingredients, img, calories, totalTime, addedToFavorite, url } = recipe;
    return (
      <div className='recipe-details'>
        {
          addedToFavorite
          ? <span className='recipe-details__icon' onClick={() => this.props.onRemoveFromFavorite(recipe)}><IoIosStar /></span>
          : <span className='recipe-details__icon' onClick={() => this.props.onAddToFavorite(recipe)}><IoIosStarOutline /></span>
        }
        <img className='recipe-details__img' src={img} alt='dish'/>
        <h4 className='recipe-details__title'>{label}</h4>
        <p className='recipe-details__kcal'>Total KCAL: {calories}</p>
        <p className='recipe-details__time'>Total Time: {(totalTime > 0) ? totalTime : 'No info'}</p>
        <div className='recipe-details__ingredients'>
          {ingredients.map((ingredient, index) => (
            <p 
              key={index}
              className={classNames(
                'recipe-details__ingredients__item', 
                (index % 2 === 0) && 'recipe-details__ingredients__item--even'
              )} 
            >
              {ingredient}
            </p>
          ))}
        </div>
        <div className='recipe-details__anchor'>
          <Anchor link={url} text='more info'/>  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    favorites: state.favorites
  };
};

const mapDispatchToProps = {
  onAddToFavorite: actionCreators.addToFavorite,
  onRemoveFromFavorite: actionCreators.removeFromFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
