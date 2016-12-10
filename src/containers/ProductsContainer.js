import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductItem from '../components/Shop/ProductItem'
import ProductsList from '../components/Shop/ProductsList'
import ProductsHoc from './ProductsHoC'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
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
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = () => ({
})

let prodContainerWithoutProds = connect(
    mapStateToProps,
    { }
)(ProductsContainer);

export default ProductsHoc(prodContainerWithoutProds);
