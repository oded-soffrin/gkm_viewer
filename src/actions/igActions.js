import * as ActionTypes from '../constants/actionTypes';
import {API_URL} from '../constants/consts';
import fetch from 'isomorphic-fetch';

export function loadNonFollowers() {

  return function (dispatch) {

    return fetch(`${API_URL}/ig_nonfollowers`)
        .then(nonf => nonf.json())
        .then(json =>

            // We can dispatch many times!
            // Here, we update the app state with the results of the API call.

            dispatch({type: ActionTypes.IG_NONFOLLOWERS,
              data: json
            })
        );

  };
}

export function onUnfollow(id, link) {
  fetch(`${API_URL}/ig_unfollow/${id}`,{ method: 'delete'});
  window.open(link, "_blank");
  return {
    type: ActionTypes.IG_UNFOLLOW,
    id: id
  };
}
