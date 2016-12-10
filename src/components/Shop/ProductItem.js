import React, { PropTypes } from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (

  <div style={{ marginBottom: 20 }}>
    <Product
        images={product.images}
      title={product.title}
      price={product.price} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.quantity > 0 ? '' : 'disabled'}>
      {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
