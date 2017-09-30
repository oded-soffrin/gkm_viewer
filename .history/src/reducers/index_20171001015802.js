import { combineReducers } from 'redux';
import ig from './igReducer';
import gkm from './gkmReducer'
import songApp from '../components/HearAsong/SongReducer'
import cart, * as fromCart from './cart'
import items, {getItems} from './item'
import products, * as fromProducts from './products'
import instaCeleb from './instaCeleb'

import {routerReducer} from 'react-router-redux';

export default combineReducers({
  ig,
  cart,
  products,
  gkm,
  items,
  songApp,
  instaCeleb,
  routing: routerReducer
});



const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getVisibleProducts = (state, config) => {
  config = config || {}
  let excludeIds = config.exclude || []
  let products = []
  state.visibleIds.map(id => {
    if (excludeIds.indexOf(id) < 0) {
      const product = getProduct(state, id);
      if (!product.images) {
        console.log("Skipping product since it has no image");
      } else {
        products.push(product)
      }
    }
  })
  return products
}

export const getProductByFilter = (state, filter) => {

  switch (filter) {
    case 'hasName':
      return getVisibleProducts(state.products).filter(p => p.name)
    case 'notLinkedToProduct':

      let connectedItems = []
      getItems(state, 'product').map((p) => {
        let allListings = p.listings.getAll();
        allListings.map((i) => {connectedItems.push(i)})
      })
      return fromProducts.getVisibleProducts(state.products, {exclude: connectedItems})
    default:
      return fromProducts.getVisibleProducts(state.products)
  }
}

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getProduct(state, id).price * getQuantity(state, id),
            0
        )
        .toFixed(2)

export const getCartProducts = state =>
    getAddedIds(state).map(id => ({
      ...getProduct(state, id),
      quantity: getQuantity(state, id)
    }))
