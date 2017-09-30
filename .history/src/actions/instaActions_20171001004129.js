
import * as types from '../constants/actionTypes';

import statsApi from '../api/stats'


export const getStats = () => dispatch => {

  statsApi.getProducts().then(data => {
    dispatch({type: types.IG_GOT_STATS, data})
  })

}
