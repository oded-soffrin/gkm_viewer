
import * as types from '../constants/actionTypes';

import statsApi from '../api/stats'


export const getStats = () => dispatch => {

  statsApi.getStats().then(data => {
    console.log(data)
    dispatch({type: types.IG_GOT_STATS, data})
  })

}
