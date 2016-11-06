import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/igActions';
import IgHomePage from '../components/Instagram/IgHomePage';

export const IgPage = (props) => {
  return (
      <IgHomePage
          actions={props.actions}
          data={props.data}
      />
  );
};

IgPage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.ig
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
)(IgPage);

