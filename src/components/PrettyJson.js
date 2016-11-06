import React, {PropTypes} from 'react';

class PrettyJson extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <pre>{JSON.stringify(this.props.data, null, 2) }</pre>
    );
  }
}

PrettyJson.propTypes = {
  data: PropTypes.object.isRequired
};

export default PrettyJson;