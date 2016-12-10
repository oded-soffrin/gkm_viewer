import React from 'react';
import {Link} from 'react-router';
import '../styles/header.scss';
import CartContainer from '../containers/CartContainer'
let Menu = require('react-burger-menu').stack;

class Header extends  React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div className="header">
          <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <CartContainer />

          </Menu>
          <Link to="/" className="logo header-element">
            <img src={require('../images/logo.jpg')}/>
          </Link>
        </div>
    );
  }
}

export default Header;
