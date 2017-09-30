
import * as actions from './itemActions'
import * as types from '../constants/actionTypes';
import { Item, Category } from '../domain/Item'
import db from '../api/inMemoryDb'


describe('items actions', () => {

  it('should load items', async () => {
    const dispatch = jest.fn();
    await actions.loadItems()(dispatch)
    expect(dispatch).toBeCalledWith({ type: types.RECEIVE_ITEMS, items: [] })
  })

  it('should add item', async () => {
    const dispatch = jest.fn();
    let item = Item.newTextItem(db, 'my text')
    item.dto.id = 1
    item.state = 'saved';
    await actions.addItem({ text: 'my text' })(dispatch)
    expect(dispatch).toBeCalledWith({ type: types.ADD_ITEM, item: item.dto })
  })

  it('should delete item', () => {
    expect(actions.deleteItem(0)).toEqual({ type: types.DELETE_ITEM, id: 0 })
  })

  it('should add category', async () => {
    const dispatch = jest.fn();
    let category = Category.newCategory(db, 'my category')
    category.dto.id = 2
    category.state = 'saved';
    await actions.addCategory({ text: 'my category' })(dispatch)
    expect(dispatch).toBeCalledWith({ type: types.ADD_CATEOGRY, category: category.dto })
  });

  it('should add item to category', () => {
    const dispatch = jest.fn();
    db.reset();
    let newItem = Item.newTextItem(db, 'my text')
    actions.addItemtoCategory(newItem, 'category')(dispatch)


    expect(dispatch).toBeCalledWith({
      "item": { "hashtags": ["category"], "id": newItem.id, "text": "my text", "type": "item" },
      "type": "UPDATE_ITEM"
    });
  });

});
