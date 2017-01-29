import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductPage from '../components/Shop/ProductPage';
import { getProduct, getRelatedProducts } from '../reducers/products'
import { addToCart } from '../actions'

const ProductPageContainer = ({id, product, addToCart, relatedProducts}) => {
  return (
      <ProductPage
          id={id}
          product={product}
          relatedProducts={relatedProducts}
          onAddToCartClicked={() => addToCart(id)}
      />
  );
};

ProductPageContainer.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
  relatedProducts: PropTypes.array
};

let mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.params.id);
  return {
    id,
    product: getProduct(state.products, id),
    relatedProducts: getRelatedProducts(state.products)
  };
}


export default connect(
    mapStateToProps,
    {addToCart}
)(ProductPageContainer);

