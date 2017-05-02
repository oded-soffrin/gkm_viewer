import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, ETSY_CATEGORY_STEP, GALLERY_ITEM_CLICK } from '../constants/actionTypes'
import _ from 'lodash';


const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity - 1
      }
    default:
      return state
  }
}

const byCollection = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          if (product.category_path && product.category_path.length > 1 && product.category_path[0] == 'Jewelry') {
            let cat = product.category_path[1];
            obj[cat] = obj[cat] || [];
            obj[cat].push(product)
          } else {
            console.warn('ByCollection: skipping', product.title, product.category_path)
          }
          return obj;
        }, {})
      }
    default: {
      return state
    }
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          product.price = parseInt(product.price)
          obj[product.listing_id] = product
          return obj
        }, {})
      }
    default: {
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
    }
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.listing_id)
    default:
      return state
  }
}

const categories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: {
      let categories = {};
      _.each(action.products, (listing) => {
        //build categories array
        let cc = categories;
        _.each(listing['category_path'], (c) => {
          cc = cc || {};
          cc[c] = cc[c] || {};
          cc = cc[c];
        });
      });
      return categories;
    }
    default:
      return state
  }
}

const category = (state = ['Jewelry'], action) => {
  switch (action.type) {
    case ETSY_CATEGORY_STEP: {
      if (action.stepIdx == 1) {
        return [action.step];
      } else if (action.stepIdx == 2) {
        return [state[0], action.step];
      } else {
        return state;
      }
    }
    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case GALLERY_ITEM_CLICK: {
      let newState = { listingId: action.listingId }
      if (state.listingId == action.listingId) {
        newState.cnt = state.cnt + 1
      } else {
        newState.cnt = 1
      }
      return newState
    }
    default:
      return state
  }
}


export const getProduct = (state, id) => {
  return state.byId[id]
}

export const getRelatedProducts = (state) => {

  let r = Math.floor((Math.random() * state.visibleIds.length - 6))
  return state.visibleIds.slice(r, r + 6).map(id => getProduct(state, id))
}

export const getProductsByCollection = (state, collectionId) => {
  return state.byCollection[collectionId];
}


export const getVisibleProducts = (state, config) => {
  config = config || {}
  let excludeIds = config.exclude || []
  let products = []
  state.visibleIds.map(id => {
    if (excludeIds.indexOf(id) < 0) {
      const product = getProduct(state, id);
      if (!product.image) {
        console.log("Skipping product since it has no image");
      } else {
        products.push(product)
      }
    }
  })
  return products
}





export default combineReducers({
  byId,
  byCollection,
  visibleIds,
  categories,
  category,
  itemSelected
})
