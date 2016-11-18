import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/EtsyActions';
import EtsyHomePage from '../components/Etsy/EtsyHomePage';

export const EtsyPageInner = (props) => {
  return (
      <EtsyHomePage
          onSelectCategory={props.actions.categorySelect}
          data={props.etsy}
      />
  );
};

EtsyPageInner.propTypes = {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EtsyPageInner);

