import React from 'react';
// import _ from 'lodash'

const Category = ({category}) => {
  return (
      <div> {category.type}: {category.text} </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Category


