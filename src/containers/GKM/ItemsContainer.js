import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions/itemActions'
import ItemsPage from '../../components/GKM/ItemsPage.js';
import {getItems} from '../../reducers/item'

export const ItemsContainer = (props) => {
  return (
      <ItemsPage
          {...props}
      />

  );
};

ItemsContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    items: getItems(state)
  };
}


export default connect(
    mapStateToProps,
    {addItem}
)(ItemsContainer);

