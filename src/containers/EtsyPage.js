import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/etsyActions.js';
import EtsyHomePage from '../components/Etsy/EtsyHomePage';

export const EtsyPage = (props) => {
  return (
      <EtsyHomePage
          onSelectCategory={props.actions.categorySelect}
          data={props.etsy}
      />
  );
};

EtsyPage.propTypes = {
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
)(EtsyPage);

