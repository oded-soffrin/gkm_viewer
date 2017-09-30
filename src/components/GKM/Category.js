import React from 'react';
import _ from 'lodash'

const Category = ({ category }) => {

  const items = _.map(category.items, (i) => (<div style={{ display: 'inline-block', padding: '10px' }}>{i.type == 'product' ? i.name : i.text}</div>))
  console.log(category.items);
  return (
    <div>
      <div> {category.type}: {category.text} </div>
      <div>Items:</div>
      {items}
    </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Category


