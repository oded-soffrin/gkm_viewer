import { expect } from 'chai';

import * as types from '../constants/actionTypes';
import ItemReducer from './item.js'

describe('items reducer', () => {

  it('should add item ', () => {
    let myText = 'My text!'
    let newState = ItemReducer([], {type: types.ADD_ITEM, text: myText})
    expect(newState[0].text).to.equal(myText)
  });


});