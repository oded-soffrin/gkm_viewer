import React from 'react';
import _ from 'lodash'


const Item = ({items, addItem}) => {
  let itemsJsx = _.map(items, (i) => (<div> {i.text} </div>))
  return (
      <div>
        <div>Items!!</div>
        {itemsJsx}
        <div onClick={() => {addItem('some text')}}>
          Add Item
        </div>
      </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Item


