/**
 * Mocking client-server processing
 */
/* import _products from './products.json' */
import {API_URL} from '../constants/consts';

const TIMEOUT = 100

export default {
  getProducts: (cb) => {
    fetch(`${API_URL}/etsy_listings`)
        .then(listing => listing.json())
        .then(productsJson => cb(productsJson))

  },
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
