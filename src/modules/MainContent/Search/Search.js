import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from '../../../components/Form/Form';
import { Button } from '../../../components/Button/Button';
import './Search.scss';
import * as actionCreators from '../../../state/actions/index';

const ENTER_KEY_CODE = 13;

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      kcal: '',
    }
  }

  search = () => {
    const { ingredients, kcal } = this.state;
    this.props.onSaveRecipes(ingredients, kcal);
  }

  enterClicked = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.search();
    }
  }

  ingredients = (event) => {
    const value = event.target.value;
    this.setState({
      ingredients: value
    });
  }

  kcal = (event) => {
    const value = event.target.value;
    this.setState({ kcal: value });
  }

  render() {
    return (
      <div className='search'>
        <Form 
          text='ingredients'
          className='search__form' 
          placeholder='beef,onions,beans' 
          onChange={this.ingredients} 
          onKeyUp={this.enterClicked} 
        />
        <Form 
          text='calories per serving (optional)'
          className='search__form'
          placeholder='300-800'
          onChange={this.kcal}
          onKeyUp={this.enterClicked} 
        />
        <Button text='GIVE ME RECIPES!' onClick={this.search} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    fetchingRecipes: state.fetchingRecipes
  };
}

const mapDispatchToProps = (dispatch) => ({
  onSaveRecipes: (ingredients, kcal) => dispatch(actionCreators.saveRecipes(ingredients, kcal)),
});

// const mapDispatchToProps = {
//   onSaveRecipesInStore: actionCreators.saveRecipes
// };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
