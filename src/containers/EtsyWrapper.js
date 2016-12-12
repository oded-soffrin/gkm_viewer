import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {categorySelect, galleryItemClick} from '../actions';

function EtsyWrapper(WrappedComponent) {

  const wrappedComponentInner = (props) => {
    return (
        <WrappedComponent
            {...props}
        />
    );
  };

  wrappedComponentInner.propTypes = {
    categories: PropTypes.object.isRequired,
    category: PropTypes.array.isRequired,
    itemSelected: PropTypes.object.isRequired,
    categorySelect: PropTypes.func.isRequired,
    galleryItemClick: PropTypes.func.isRequired
  };

  function mapStateToProps(state) {
    return {
        categories: state.products.categories,
        category: state.products.category,
        itemSelected: state.products.itemSelected
      }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({categorySelect, galleryItemClick}, dispatch);
  }

  return connect(
      mapStateToProps,
      mapDispatchToProps
  )(wrappedComponentInner);
}

export default EtsyWrapper;


