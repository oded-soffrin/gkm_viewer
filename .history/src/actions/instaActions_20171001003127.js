
import * as types from '../constants/actionTypes';

export const getStats = () => dispatch => {
  dispatch({type: types.IG_GOT_STATS})
}
