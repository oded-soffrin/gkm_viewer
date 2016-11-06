import {IG_NONFOLLOWERS, IG_UNFOLLOW} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import _ from 'lodash';

export default function igReducer(state = initialState.ig, action) {

  let newState;

  switch (action.type) {
    case IG_NONFOLLOWERS:
      newState = objectAssign({}, state);
      newState.nonfollowers = action.data;
      return newState;
    case IG_UNFOLLOW:
      newState = objectAssign({}, state);
      newState.nonfollowers = _.filter(newState.nonfollowers, function(o) { return o.id !== action.id; });
      return newState;
    default:
      return state;
  }
}
