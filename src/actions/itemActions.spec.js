
import * as actions from './itemActions'
import * as types from '../constants/actionTypes';
import {Item} from '../domain/Item'
import db from '../api/inMemoryDb'


describe('items actions', () => {

    it('should load items', async () => {
        const dispatch = jest.fn();
        await actions.loadItems()(dispatch)
        expect(dispatch).toBeCalledWith({type: types.RECEIVE_ITEMS, items: []})
    })

    it('should add item', () => {
        let addAction = actions.addItem('my text')
        expect(addAction.type).toEqual(types.ADD_ITEM);
        expect(addAction.item.type).toEqual('item')
        expect(addAction.item.text).toEqual('my text');
    })

    it('should delete item', () => {
        expect(actions.deleteItem(0)).toEqual({type: types.DELETE_ITEM, id: 0})
    })

    it('should add category', () => {
        let addCategory = actions.addCategory('my category')
        expect(addCategory.type).toEqual(types.ADD_CATEOGRY)
        expect(addCategory.category.type).toEqual('category')
        expect(addCategory.category.text).toEqual('my category')
    });

    it('should add item to category', () => {
        const dispatch = jest.fn();
        db.reset();
        let nextId = db.nextIdWilBe()
        actions.addItemtoCategory(Item.newTextItem(db, 'my text'),  'category')(dispatch)


        expect(dispatch).toBeCalledWith({
            "item": {"hashtags": ["category"], "id": nextId, "text": "my text", "type": "item"},
            "type": "UPDATE_ITEM"
        });
    });

});