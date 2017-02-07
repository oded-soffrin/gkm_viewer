import { expect } from 'chai';
import * as actions from './itemActions'
import * as types from '../constants/actionTypes';

describe('items actions', () => {

    it('should add item', () => {

        expect(actions.addItem('my text')).to.deep.equal({
            text: 'my text',
            type: types.ADD_ITEM
        });
    });

});