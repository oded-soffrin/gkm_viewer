import React from 'react';
import { connect } from 'react-redux';
import { addItem, addCategory, updateItem, deleteItem, resetDb } from '../../actions/itemActions'
import ItemsPage from '../../components/GKM/ItemsPage.js';
import { getItems, getCategories } from '../../reducers/item'

export const ItemsContainer = (props) => {
  return (
    <div>
      <h1>Items Container</h1>
      <ItemsPage
        {...props}
      />

    </div>


  );
};

ItemsContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    items: getItems(state),
    categories: getCategories(state)
  };
}


export default connect(
  mapStateToProps,
  { addItem, addCategory, updateItem, deleteItem, resetDb }
)(ItemsContainer);

