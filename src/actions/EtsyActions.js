import * as types from '../constants/actionTypes';
import {API_URL} from '../constants/consts';

export function loadItems() {
  return function (dispatch, getState) {
    let currentListings = getState().etsy.listings;
    if (currentListings.length > 0) {
      return Promise.resolve();
    } else {
      return fetch(`${API_URL}/etsy_listings`)
          .then(listing => listing.json())
          .then(json =>
              // We can dispatch many times!
              // Here, we update the app state with the results of the API call.
              dispatch({type: types.ETSY_LOAD_ITEMS,
                listings: json
              })
          );
    }
  };
}

export function categorySelect(step, stepIdx = 1) {
  return {type: types.ETSY_CATEGORY_STEP, step, stepIdx};
}

export function galleryItemClick(idx) {
  return {type: types.GALLERY_ITEM_CLICK, idx};
}