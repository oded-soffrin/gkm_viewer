import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from './Header';
import SearchBar from './SearchBar';
import ProductsHoC from "../containers/ProductsHoC"

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (

        <div className="home-page">

          <Header />
          <img width="100%" src={require('../images/first.jpg')}/>

          <Link className="button" to="/about">Who are we?</Link>
          <Link className="button" to="/shop">Let's shop!</Link>
          <SearchBar products={this.props.products} />

        </div>
    );
  }
}


HomePage.propTypes = {
  products: PropTypes.array.isRequired
};


export default ProductsHoC(HomePage);
