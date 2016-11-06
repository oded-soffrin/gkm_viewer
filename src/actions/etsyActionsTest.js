import * as ActionTypes from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

let baseUrl = 'https://localhost:4567';
export function loadNonFollowers() {

  return function (dispatch) {

    return fetch(`${baseUrl}/ig_nonfollowers`)
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
  fetch(`${baseUrl}/ig_unfollow/${id}`,{ method: 'delete'});
  window.open(link, "_blank");
  return {
    type: ActionTypes.IG_UNFOLLOW,
    id: id
  };
}
