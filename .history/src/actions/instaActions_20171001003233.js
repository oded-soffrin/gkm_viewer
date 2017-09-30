
import * as types from '../constants/actionTypes';

export const getStats = () => dispatch => {
  dispatch({type: types.IG_GOT_STATS, data:[1,2,3]})
}
