import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CollectionPage from '../components/Shop/CollectionPage';
import { getProductsByCollection } from '../reducers/products'
import { galleryItemClick} from '../actions'


const CollectionContainerInner = ({collectionId, products, itemSelected, galleryItemClick, categories}) => {
  return (
      <CollectionPage
          collectionId={collectionId}
          products={products}
          galleryItemClick={galleryItemClick}
          itemSelected={itemSelected}
          categories={categories}
      />
  );
};

CollectionContainerInner.propTypes = {
  collectionId: PropTypes.string.isRequired,
  products: PropTypes.array,
  categories: PropTypes.array,
  itemSelected: PropTypes.object.isRequired,
  galleryItemClick: PropTypes.func.isRequired
};

let mapStateToProps = (state, ownProps) => {
  let collectionId = ownProps.params.id;
  return {
    collectionId,
    products: getProductsByCollection(state.products, collectionId),
    categories: state.products.categories,
    itemSelected: state.products.itemSelected
  };
}





export default connect(
    mapStateToProps,
    { galleryItemClick }
)(CollectionContainerInner);

