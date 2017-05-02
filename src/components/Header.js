import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import '../styles/header.scss';
import CartContainer from '../containers/CartContainer'
import SearchBar from './SearchBar';
import ProductsHoC from "../containers/ProductsHoC"
import Radium from 'radium';
import { browserHistory } from 'react-router';

let RadiumLink = Radium(Link);
let Menu = require('react-burger-menu').stack;

class Header extends  React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div className="header">
          <Menu right>
            <SearchBar products={this.props.products} onSelect={(value) => browserHistory.push('/shop/' + value) }/>

            <RadiumLink className="home menu-item" to="/">Home</RadiumLink>
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


Header.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsHoC(Header);
