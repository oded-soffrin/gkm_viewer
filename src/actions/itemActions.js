import * as types from '../constants/actionTypes';
import {Item, Category} from '../domain/Item'
import db from '../api/inMemoryDb'

export const loadItems = () => (dispatch) => {
  db.loadAll().then((items) => {
    dispatch({type: types.RECEIVE_ITEMS, items: items})
  })
}

export function addItem(text) {
  let item = Item.newTextItem(db, text)
  item.save()
  return {type: types.ADD_ITEM, item: item.dto}
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

export function addCategory(categoryName) {
  let category = Category.newCategory(db, categoryName)
  category.save()
  return {type: types.ADD_CATEOGRY, category: category.dto}
}


export const addItemtoCategory = (item, category) => (dispatch)=> {
  item.hashtags.add(category)
  dispatch({type: types.UPDATE_ITEM, item: item.dto})
}


