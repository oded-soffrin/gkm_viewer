import * as types from '../constants/actionTypes';
import {Item, Category, EtsyProductItem} from '../domain/Item'
import db from '../api/inMemoryDb'

export const loadItems = () => (dispatch) => {
  db.loadAll().then((items) => {
    dispatch({type: types.RECEIVE_ITEMS, items: items})
  })
}

export const addItem = (itemData) => (dispatch) => {
  let item = Item.newTextItem(db, itemData.text)
  return item.save().then((item) => {
    dispatch({type: types.ADD_ITEM, item: item.dto})
  })
}

export function updateItem(item) {
  db.update(item.dto) //TODO: move into item save
  return {type: types.UPDATE_ITEM, item: item.dto}
}

export function deleteItem(itemId) {
  db.delete(itemId)
  return {type: types.DELETE_ITEM, id: itemId}
}

export const resetDb = () => {
  db.reset()
  return {type: types.RESET_ITEMS}
}

export const addCategory = (categoryData) => (dispatch) => {
  let category = Category.newCategory(db, categoryData.text)
  return category.save().then((category) => {
    dispatch({type: types.ADD_CATEOGRY, category: category.dto })
  })
}

export const addItemtoCategory = (item, category) => (dispatch)=> {
  item.hashtags.add(category)
  dispatch({type: types.UPDATE_ITEM, item: item.dto})
}

export const createProductFromEtsyLIsting = (listing) => (dispatch) => {
  let item = new EtsyProductItem(db).new()
  item.listings.add(listing)
  item.save().then((productDto) => {
    dispatch({type: types.ADD_PRODUCT, product: productDto.dto})
  })
}

export const addListingToProduct = (product, listing) =>  {
  product.listings.add(listing)
  db.update(product.dto)
  return {type: types.UPDATE_ITEM, item: product.dto}
}



