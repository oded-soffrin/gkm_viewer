
import {API_URL} from '../constants/consts';
import fetch from 'isomorphic-fetch';

export default {
  getNextItemsToTweet: () => {
    return fetch(`${API_URL}/next_items_to_tweet`)
        .then(listing => listing.json())
  },

  getValidTweets: () => {
    return fetch(`${API_URL}/valid_tweets`)
        .then(listing => listing.json())
  }
}
