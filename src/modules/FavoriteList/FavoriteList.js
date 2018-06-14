import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from '../Recipe/Recipe';

class FavoriteList extends Component {
  render() {
    return (
      <div className="favorite-list content">
        {this.props.favorites.map((item) => (
          <Recipe key={item.id} item={item}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(FavoriteList);
