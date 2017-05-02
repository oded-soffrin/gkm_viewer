import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductItem from '../components/GKM/ProductItem'
import ProductsList from '../components/Shop/ProductsList'
import {updateProduct} from '../actions/index'
import {createProductFromEtsyLIsting} from '../actions/itemActions'
import ProductsHoc from './ProductsHoC'

const ProductsContainer = ({ products, addToCart, updateProduct, createProductFromEtsyLIsting }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        onUpdateProduct={updateProduct}
        createProductFromEtsyLIsting={createProductFromEtsyLIsting}
      />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  createProductFromEtsyLIsting: PropTypes.func
}

const mapStateToProps = () => ({
})

let prodContainerWithoutProds = connect(
    mapStateToProps,
    {updateProduct, createProductFromEtsyLIsting}
)(ProductsContainer);

export default ProductsHoc(prodContainerWithoutProds);
