import shop from '../api/shop'
import * as types from '../constants/actionTypes'
import {notification} from './notificaiton'


const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].quantity > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const updateProduct = (productId, productUpdte) => (dispatch) => {
  dispatch(notification('Updating Product'));
  console.info('updating product', productId, productUpdte);

  shop.updateProduct(productId, productUpdte)
      .then(() => {
        dispatch(notification('Product updated'));
      });
};

export function categorySelect(step, stepIdx = 1) {
  return {type: types.ETSY_CATEGORY_STEP, step, stepIdx};
}

export function galleryItemClick(listingId) {
  return {type: types.GALLERY_ITEM_CLICK, listingId};
}

