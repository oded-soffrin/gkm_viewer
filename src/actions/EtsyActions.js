import * as types from '../constants/actionTypes';

export function etsyAction() {
  return {type: types.ETSY_ACTION};
}

export function categorySelect(step, stepIdx = 1) {
  //console.log('action!', step, 'doing nothing');
  return {type: types.ETSY_CATEGORY_STEP, step, stepIdx};
}