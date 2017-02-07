import * as types from '../constants/actionTypes';

export function addItem(text) {
  return {type: types.ADD_ITEM, text}
}
