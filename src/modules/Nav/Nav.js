import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosStar, IoIosSearchStrong } from 'react-icons/lib/io'
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        className="nav__link" 
        activeClassName="nav__link--selected"
        to="/"
      >
        <span className="nav__link__icon nav__link__icon--search"><IoIosSearchStrong /></span>search
      </NavLink>
      <NavLink 
        className="nav__link" 
        activeClassName="nav__link--selected"
        to="/favorites"
      >
        <span className="nav__link__icon nav__link__icon--favorites"><IoIosStar /></span>favorites
      </NavLink>
    </nav>
  )
}

export default Nav;
