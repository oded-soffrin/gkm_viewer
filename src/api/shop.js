/**
 * Mocking client-server processing
 */
/* import _products from './products.json' */
import {API_URL} from '../constants/consts';
import fetch from 'isomorphic-fetch';

const TIMEOUT = 100

export default {
  getProducts: (cb) => {
    fetch(`${API_URL}/etsy_listings`)
        .then(listing => listing.json())
        .then(productsJson => cb(productsJson))

  },

  updateProduct: (id,  updateObject) => {

    return fetch(`${API_URL}/listing/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updateObject),
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          })

        }
    );
  },

  //Dummy function
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
