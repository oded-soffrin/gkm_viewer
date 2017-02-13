import React from 'react';
// import _ from 'lodash'

const Category = ({category}) => {
  return (
      <div>
        <div> {category.type}: {category.text} </div>
        <div>Items that belong to category:</div>
        {_.map([])}
      </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Category


