import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IoIosStar, IoIosStarOutline } from 'react-icons/lib/io';
import './Recipe.scss';
import * as actionCreators from '../../state/actions/index';

export class Recipe extends Component {
  
  onToggleFavorite = (event) => {
    const recipe = this.props.item;
    const { addedToFavorite } = recipe;
    const { onAddToFavorite, onRemoveFromFavorite } = this.props;
    event.preventDefault();
    addedToFavorite 
      ? onRemoveFromFavorite(recipe)
      : onAddToFavorite(recipe);
  };

  render(){
    const recipe = this.props.item;
    const { id, label, ingredients, img, calories, totalTime, addedToFavorite } = recipe;
    const isEvenRecipe = id % 2 === 0;
    return (
      <Link to={`/recipe/${id}`}>
        <div 
          className={classNames('recipe', isEvenRecipe && 'recipe--even')}
          onClick={this.showDetails} 
        >
          <span className="recipe__icon" onClick={this.onToggleFavorite}>
            {addedToFavorite ? <IoIosStar /> : <IoIosStarOutline />}
          </span>
          <img className="recipe__img" src={img} alt='dish'/>
          <span className="recipe__icon-place"></span>
          <h4 className="recipe__title">{label}</h4>
          <p className="recipe__kcal">Total KCAL: {calories}</p>
          <p className="recipe__time">Total Time: {(totalTime > 0) ? totalTime : 'No info'}</p>
          <p className="recipe__ingredient-amount">Ingredients: {ingredients.length}</p>
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = {
  onAddToFavorite: actionCreators.addToFavorite,
  onRemoveFromFavorite: actionCreators.removeFromFavorite
};

export default connect(null, mapDispatchToProps)(Recipe);
