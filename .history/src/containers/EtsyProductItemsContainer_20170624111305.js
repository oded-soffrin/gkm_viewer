import React from 'react'
import { connect } from 'react-redux'
import ProductPageContainer from './ProductsContainer'
import EtsyProduct from '../components/GKM/EtsyProduct'
import { getItems, getCategories } from '../reducers/item'
import { updateItem, addListingToProduct, resetDb, addCategory } from '../actions/itemActions'
import { getProductByFilter } from '../reducers'
import Input from '../components/Common/Input'
import _ from 'lodash'

const EtsyProductItemsContainer = ({ etsyProducts, updateItem, listings, addListingToProduct, resetDb, categories, addCategory }) => {
  const categoriesJsx = _.map(categories, (i) => (<Category category={i} />))
  console.log('etsyProducts', etsyProducts);
  return (
    <div>
      <h1>Etsy Product Items Container!</h1>
      <button onClick={resetDb}>RESET ITMES DB! (in memory still)</button>

      <h2> Categories </h2>
      {categoriesJsx}
      <Input title="add new category" fld='text' button={{ text: 'ADD!', action: addCategory }} />

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
  categories: getCategories(state),
})

let prodContainerWithoutProds = connect(
  mapStateToProps,
  { updateItem, addListingToProduct, resetDb, addCategory }
)(EtsyProductItemsContainer);

export default prodContainerWithoutProds;
