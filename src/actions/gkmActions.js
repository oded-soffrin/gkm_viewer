import * as types from '../constants/actionTypes';
import gkm from '../api/gkm'
import {notification} from './notificaiton'

export const getNextItemsToTweet = () => dispatch => {
  dispatch(notification('Getting next items'));
  gkm.getNextItemsToTweet()
      .then((items) => {
        dispatch({
          type: types.NEXT_ITEMS_TO_TWEET,
          items
        });

      });
}

export const getValidTweets = () => dispatch => {
  dispatch(notification('Getting next items'));
  gkm.getValidTweets()
      .then((items) => {
        dispatch({
          type: types.NEXT_VALID_TWEETS,
          items
        });

      });
}