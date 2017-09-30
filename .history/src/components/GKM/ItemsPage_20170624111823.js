import React from 'react';
import _ from 'lodash'
import Item from './Item'
import Category from './Category'
import Input from '../Common/Input'

//TODO: Categories refactor
const ItemsPage = ({ items, addItem, categories, addCategory, updateItem, deleteItem, resetDb }) => {
  let itemsJsx = _.map(items, (i) => (<Item item={i} updateItem={updateItem} deleteItem={deleteItem} />))
  let categoriesJsx = _.map(categories, (i) => (<Category category={i} />))
  return (
    <div>

      <button onClick={resetDb}>RESET DB!</button>

      <h1>Categories</h1>
      {categoriesJsx}
      <Input title="add new category" fld='text' button={{ text: 'ADD!', action: addCategory }} />

      <h1>Items</h1>
      {itemsJsx}
      <Input title="add new" fld='text' resetOnClick={true} button={{ text: 'ADD!', action: addItem }} />

    </div>
  )
};

export default ItemsPage


