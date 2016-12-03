import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/EtsyActions';

function EtsyWrapper(WrappedComponent) {

  const wrappedComponentInner = (props) => {
    return (
        <WrappedComponent
            actions={props.actions}
            data={props.etsy}
        />
    );
  };

  wrappedComponentInner.propTypes = {
    actions: PropTypes.object.isRequired,
    etsy: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      etsy: state.etsy
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  return connect(
      mapStateToProps,
      mapDispatchToProps
  )(wrappedComponentInner);
}

export default EtsyWrapper;


