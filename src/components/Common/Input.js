import React, { PropTypes } from 'react'
import _ from 'lodash'
class Input extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {value: props.value}
  }

  componentWillReceiveProps(props) {
    this.setState({value: props.value})
  }

  updateInputValue(value) {
    let updateObject = {};
    updateObject[this.props.fld] = value;
    this.props.onUpdate ? this.props.onUpdate(this.props.id, updateObject) : '';
    this.setState({value});
  }

  onSubmitClick () {
    let updateObject = {};
    updateObject[this.props.fld] = this.state.value;
    this.props.button.action(updateObject)
    if (this.props.resetOnClick) {
      this.setState({value: ''})
    }
  }

  render () {
    let submitButton = (this.props.button ? (<button onClick={() => {this.onSubmitClick()}}> {this.props.button.text} </button>) : '')
    let waitTime = this.props.button ? 0 : 250
    let debouncedUpdateFunc = _.debounce((value) => this.updateInputValue(value), waitTime, { 'maxWait': 1000 });

    return (
        <div>
          <span>{this.props.title}:</span>
          <input type="text" value={this.state.value || ''} onChange={(evt) => debouncedUpdateFunc(evt.target.value)} />
          {submitButton}
        </div>
        )
  }
}

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  fld: PropTypes.string,
  id: PropTypes.string,
  onUpdate: PropTypes.func,
  resetOnClick: PropTypes.func
}

export default Input
