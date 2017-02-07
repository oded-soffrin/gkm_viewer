import * as types from '../constants/actionTypes'
import {Item} from '../domain/Item'
import inMemoryDB from '../api/inMemoryDb'
import _ from 'lodash'

let initialState = []

let newItemDto = (text) => {
  let item = new Item(inMemoryDB).new()
  item.text = text;
  return item.dto
}

export const getItems = (state) => {
  return _.map(state.items, (itemDto) => (new Item(inMemoryDB, {dto: itemDto})))
}

const ItemRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, newItemDto(action.text)];
    default:
      return state
  }
}

export default ItemRedcuer
