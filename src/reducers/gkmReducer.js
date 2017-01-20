import {NEXT_ITEMS_TO_TWEET, NEXT_VALID_TWEETS} from '../constants/actionTypes';
import objectAssign from 'object-assign';

let defaultState = {
  nextTweets: [],
  latestTweets: []
};

export default function gkmReducer(state = defaultState, action) {

  let newState;

  switch (action.type) {
    case NEXT_ITEMS_TO_TWEET:
      newState = objectAssign({}, state);
      newState.nextTweets = action.items;
      return newState;
    case NEXT_VALID_TWEETS:
      newState = objectAssign({}, state);
      newState.latestTweets = action.items;
      return newState;
    default:
      return state;
  }
}
