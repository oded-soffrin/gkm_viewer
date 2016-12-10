import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductPage from '../components/Shop/ProductPage';
import { getProduct } from '../reducers/products'
import { addToCart } from '../actions'

const ProductPageContainer = ({id, product, addToCart}) => {
  return (
      <ProductPage
          id={id}
          product={product}
          onAddToCartClicked={() => addToCart(id)}
      />
  );
};

ProductPageContainer.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  addToCart: PropTypes.func.isRequired
};

let mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.params.id);
  return {
    id,
    product: getProduct(state.products, id)
  };
}


export default connect(
    mapStateToProps,
    {addToCart}
)(ProductPageContainer);

