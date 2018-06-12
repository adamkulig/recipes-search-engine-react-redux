import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';
import FavoriteList from './FavoriteList/FavoriteList';
import RecipeDetails from './RecipeDetails/RecipeDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header />
          <Nav />
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route path='/favorites' component={FavoriteList} />
            <Route path='/recipe/:id' component={RecipeDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
