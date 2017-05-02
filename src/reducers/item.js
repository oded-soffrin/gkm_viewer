import * as types from '../constants/actionTypes'
import _ from 'lodash'
import {Item, Category, EtsyProductItem} from '../domain/Item'
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
        categories: state.categories
      }

    case types.RESET_ITEMS:
      return initialState;

    case types.DELETE_ITEM:
      return {
        items: _.filter(state.items, (item) => (item.id !== action.id)),
        categories: _.filter(state.categories, (item) => (item.id !== action.id))
      }

    case types.ADD_PRODUCT:
      return {
        items: [...state.items, action.product],
        categories: state.categories
      }

    default:
      return state
  }
}
const filterItemsByHashtag = (items, hashtag) => {
  return _.filter(items, (i) => {
    return ((i.hashtags || []).indexOf(hashtag) >= 0)
  })
}

export const getItems = (state, type) => {
  let items = state.items.items
  if (type) {
    items = _.filter(items, (i) => (i.type === type))
  }

  if (type === 'product') {
    return _.map(items, (productDto) => {
      let pitem = new EtsyProductItem(inMemoryDB, {dto: productDto})
      pitem.populateListings(state.products.byId)
      return pitem
    })
  } else {
    return _.map(items, (itemDto) => (new Item(inMemoryDB, {dto: itemDto})))
  }
  let itemRef = (type == 'product' ? EtsyProductItem : Item)

}

export const getCategories = (state) => {
  return _.map(state.items.categories, (itemDto) => {
    let cat = new Category(inMemoryDB, {dto: itemDto})
    cat.setItems(filterItemsByHashtag(state.items.items, cat.text))
    return cat
  })
}

export default ItemRedcuer
