

import * as types from '../constants/actionTypes';
import ItemReducer from './item.js'

describe('items reducer', () => {

  it('should receive items', () => {

    let newState = ItemReducer(undefined, {type: types.RECEIVE_ITEMS, items: [{type: 'text', a: 1}, {type: 'category', b: 2}]})
    expect(newState.items[0].a).toEqual(1)
    expect(newState.categories[0].b).toEqual(2)
  })

  it('should add item', () => {
    let myText = 'My text!'
    let newState = ItemReducer(undefined, {type: types.ADD_ITEM, item: {text: myText}})

    let item = newState.items[0]
    expect(item.text).toEqual(myText)
  });

  it('should delete item', () => {

    let state = {
      items: [
        {
          id:1,
          a: 1
        },
        {
          id: 2,
          b: 2
        }
      ]
    }

    let newState = ItemReducer(state, {type: types.DELETE_ITEM, id: 1})
    expect(newState.items.length).toEqual(1)
  })

  it('should update item', () => {

    let state = {
      items: [
        {
          id:1,
          a: 1
        }
      ]
    }

    let newState = ItemReducer(state, {type: types.UPDATE_ITEM, item: {id: 1, a: 2}})
    expect(newState.items[0].a).toEqual(2)
  })


  it('should add category', () => {
    let myText = 'My category!'
    let newState = ItemReducer(undefined, {type: types.ADD_CATEOGRY, category: {type: 'category', text: myText}})
    let item = newState.categories[0]
    expect(item.type).toEqual('category')
    expect(item.text).toEqual(myText)
  })


});
