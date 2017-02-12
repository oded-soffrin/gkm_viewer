import React from 'react';
import Input from '../Common/Input'

// import _ from 'lodash'

const Item = ({item, updateItem, deleteItem}) => {
  console.log('got item', item)
  const onUpdateField = (fld, val) => {
    item[fld] = val
    console.log(' updating item', item.dto);
    updateItem(item);
  }


  return (
      <div id={item.id}>
        <div>{item.type}: {item.text}</div>
        <Input id={item.id} fld='text' title="update item" value={item.text} button={{text: 'Update', action: (val) => onUpdateField('text', val) }}/>
        <button onClick={() => deleteItem(item.id)} > X </button>

      </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Item


