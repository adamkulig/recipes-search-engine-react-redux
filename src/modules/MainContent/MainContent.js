import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import './MainContent.scss';
import Recipe from './../Recipe/Recipe';
import Search from './Search/Search';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import * as actionCreators from '../../state/actions/index';

class MainContent extends Component {
  loadMore = () => {
    const lastRecipe = this.props.recipes.length;
    const { ingredients, kcal, spinner } = this.props.loading;
    const isNewSearch = false;
    !spinner && this.props.onSaveRecipes(ingredients, kcal, lastRecipe, isNewSearch);
  }
  render() {
    const { spinner } = this.props.loading;
    const recipesAreShown = this.props.recipes.length !== 0;
    return (
      <div className='main-content'>
        <Search />
        {spinner && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={!spinner && recipesAreShown}>
          <div className="main-content__list">
            {this.props.recipes.map(item => (
              <Recipe key={item.id} item={item}/>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: state.loading
  };
}

const mapDispatchToProps = {
  onSaveRecipes: actionCreators.saveRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
