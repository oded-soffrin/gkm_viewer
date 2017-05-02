import React from 'react'
import { connect } from 'react-redux'
import ProductPageContainer from './ProductsContainer'
import EtsyProduct from '../components/GKM/EtsyProduct'
import { getItems } from '../reducers/item'
import { updateItem, addListingToProduct, resetDb } from '../actions/itemActions'
import { getProductByFilter } from '../reducers'
import _ from 'lodash'

const EtsyProductItemsContainer = ({ etsyProducts, updateItem, listings, addListingToProduct, resetDb }) => {

  console.log('etsyProducts', etsyProducts);
  return (
    <div>
      <h1>Etsy Product Items Container!</h1>
      <button onClick={resetDb}>RESET ITMES DB! (in memory still)</button>
      <h2> Categories </h2>
      <div> TODO </div>
      <h2> Products </h2>
      {_.map(etsyProducts, (p) => (<EtsyProduct product={p} listings={listings} updateItem={updateItem} addListingToProduct={addListingToProduct} />))}

      <h2> listing without product </h2>
      <ProductPageContainer filter="notLinkedToProduct" />

    </div>
  )
}

const mapStateToProps = (state) => ({
  etsyProducts: getItems(state, 'product'),
  listings: getProductByFilter(state, 'notLinkedToProduct'),
})

let prodContainerWithoutProds = connect(
  mapStateToProps,
  { updateItem, addListingToProduct, resetDb }
)(EtsyProductItemsContainer);

export default prodContainerWithoutProds;
