/**
 * Mocking client-server processing
 */
/* import _products from './products.json' */

import fetch from 'isomorphic-fetch';
const API_URL = 'http://13.92.101.233/api'

export default {
  getStats: () => {
    fetch(`${API_URL}/ig/stats`)
        .then(data => data.json())

  },
}
