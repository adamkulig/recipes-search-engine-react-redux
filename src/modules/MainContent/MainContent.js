import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.scss';
import Recipe from './../Recipe/Recipe';
import Search from './Search/Search';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';

class MainContent extends Component {
  render() {
    const loading = this.props.loading;
    return (
      <div className='main-content'>
        <Search />
        {loading && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        <div className="main-content__list">
          {this.props.recipes.map((item,index) => (
            <Recipe key={item.id} item={item}/>
          ))}
        </div>
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

export default connect(mapStateToProps)(MainContent);
