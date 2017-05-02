import React from 'react';
import _ from 'lodash'

const Category = ({category}) => {
  return (
      <div>
        <div> {category.type}: {category.text} </div>
        <div>Items:</div>
        {_.map(category.items, (i) => (<div style={{display: 'inline-block', padding: '10px'}}>{i.text}</div>))}
      </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Category


