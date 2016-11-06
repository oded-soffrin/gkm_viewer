import {ETSY_CATEGORY_STEP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function etsyReducer(state = initialState.etsy, action) {

  let newState;

  switch (action.type) {
    case ETSY_CATEGORY_STEP:
      newState = objectAssign({}, state);
      if (action.stepIdx == 1) {
        newState.category = [action.step];
      } else if (action.stepIdx == 2) {
        newState.category = [state.category[0], action.step];
      }
      return newState;
    default:
      return state;
  }
}
