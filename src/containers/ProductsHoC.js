import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProductByFilter } from '../reducers'
import { addToCart , categorySelect, galleryItemClick} from '../actions'

function ProductsHoC(WrappedComponent) {

  const ProductsHoCInner = (props) => (
      <WrappedComponent
          {...props}
      />
  )

  ProductsHoCInner.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    category: PropTypes.array.isRequired,
    itemSelected: PropTypes.object.isRequired,
    categorySelect: PropTypes.func.isRequired,
    galleryItemClick: PropTypes.func.isRequired
  }

  const mapStateToProps = (state, ownProps) => {
    return{
      products: getProductByFilter(state, ownProps.filter),
      categories: state.products.categories,
      category: state.products.category,
      itemSelected: state.products.itemSelected
    }
  }

  return connect(
      mapStateToProps,
      {categorySelect, galleryItemClick, addToCart}
  )(ProductsHoCInner)
}

export default ProductsHoC;
