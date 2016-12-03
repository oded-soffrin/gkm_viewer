import {ETSY_LOAD_ITEMS, ETSY_CATEGORY_STEP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import _ from 'lodash';

export default function etsyReducer(state = initialState.etsy, action) {

  let newState;
  switch (action.type) {
    case ETSY_LOAD_ITEMS: {
      newState = objectAssign({}, state);

      newState.listings = action.listings;

      let categories = {};
      for (let i = 0; i < action.listings.length; i++) {
        let l = action.listings[i];
        let cat_path = l['category_path'];

        //build categories array - should be only when updating items
        let cc = categories;
        _.each(cat_path, (c) => {
          cc = cc || {};
          cc[c] = cc[c] || {};
          cc = cc[c];
        });
      }
      newState.categories = categories;
      return newState;
    }
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
