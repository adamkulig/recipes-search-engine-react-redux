import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.scss';
import Recipe from './../Recipe/Recipe';
import Search from './Search/Search';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';

class MainContent extends Component {
  render() {
    const loading = this.props.fetchingRecipes.loadingRecipes;
    return (
      <div className='main-content'>
        <Search />
        { loading && 
          <Modal>
            <Spinner />
          </Modal>
        }
        <div className="main-content__list">
          {this.props.recipes.map((item,index) => (
            <Recipe key={index} index={index} item={item}/>
          ))}
        </div>
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

export default connect(mapStateToProps, null)(MainContent);