import React, { PropTypes } from 'react'
import _ from 'lodash'
class Input extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value
    }
  }

  updateInputValue(value) {
    console.log('fld', this.props.fld, 'v', value);
    let updateObject = {};
    updateObject[this.props.fld] = value;
    this.props.onUpdate(this.props.id, updateObject);
    this.setState({value});

  }

  render () {
    let debouncedUpdateFunc = _.debounce((value) => this.updateInputValue(value), 250, { 'maxWait': 1000 });

    return (
        <div>
          <span>{this.props.title}:</span>
          <input type="text" defaultValue={this.state.value} onChange={(evt) => debouncedUpdateFunc(evt.target.value)} />
        </div>
        )
  }
}

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  fld: PropTypes.string,
  id: PropTypes.string,
  onUpdate: PropTypes.func
}

export default Input
