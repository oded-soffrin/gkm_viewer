import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/EtsyActions';
import ProductPage from '../components/Shop/ProductPage';

export const ProductPageContainer = (props) => {
  return (
      <ProductPage
          actions={props.actions}
          id={props.id}
          listing={props.listing}
      />
  );
};

ProductPageContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  listing: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let id = parseInt(ownProps.params.id);
  let newProps = {id};
  let listingIdx = state.etsy.listingIdToIdx[id];
  if (listingIdx != undefined) {
    newProps.listing = state.etsy.listings[listingIdx];
  }
  return newProps;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPageContainer);

