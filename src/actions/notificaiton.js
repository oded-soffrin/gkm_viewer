
import {SHOW_NOTIFICATION} from '../constants/actionTypes';

export const notification = (text) => {
  return {
    type: SHOW_NOTIFICATION,
    text
  }
};