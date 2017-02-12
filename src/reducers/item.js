import * as types from '../constants/actionTypes'
import _ from 'lodash'
import {Item, Category} from '../domain/Item'
import inMemoryDB from '../api/inMemoryDb'

let initialState = {
  items: [],
  categories: []
}


const ItemRedcuer = (state = initialState, action) => {
  switch (action.type) {

    case types.RECEIVE_ITEMS:
      return {
        items: _.filter(action.items, (i) => (i.type !== 'category')),
        categories: _.filter(action.items, (i) => (i.type === 'category'))
      }
    case types.ADD_ITEM:
      return {
        items: [...state.items, action.item],
        categories: state.categories
      }

    case types.ADD_CATEOGRY:
      return {
        items: state.items,
        categories: [...state.categories, action.category]
      }
    case types.UPDATE_ITEM:
      return {
        items: _.map(state.items, (item) => ((item.id === action.item.id) ? action.item : item)),
        categories: state.categoreis
      }

    case types.RESET_ITEMS:
      return initialState;

    case types.DELETE_ITEM:
      return {
        items: _.filter(state.items, (item) => (item.id !== action.id)),
        categories: _.filter(state.categories, (item) => (item.id !== action.id))
      }

    default:
      return state
  }
}

export const getItems = (state) => {
  return _.map(state.items.items, (itemDto) => (new Item(inMemoryDB, {dto: itemDto})))
}

export const getCategories = (state) => {
  return _.map(state.items.categories, (itemDto) => (new Category(inMemoryDB, {dto: itemDto})))
}

export default ItemRedcuer
