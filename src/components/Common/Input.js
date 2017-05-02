import React, { PropTypes } from 'react'
import _ from 'lodash'
class Input extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { value, button, delayTime } = props;

    this.state = { value }
    let waitTime = button ? 0 : (delayTime || 250);
    this.debouncedUpdateFunc = _.debounce((value) => { return this.updateInputValue(value) }, waitTime)
  }


  componentWillReceiveProps(props) {
    this.setState({ value: props.value })
  }


  updateInputValue(value) {
    const updateObject = this.getUpdateObject(value)
    this.props.onUpdate ? this.props.onUpdate(this.props.id, updateObject) : '';
  }


  onSubmitClick() {
    const updateObject = this.getUpdateObject(this.state.value)
    this.props.button.action(updateObject)
    this.resetStateIfNeeded();
  }

  render() {
    let submitButton = (this.props.button ? (<button onClick={() => { this.onSubmitClick() }}> {this.props.button.text} </button>) : '')
    const onChange = (value) => {
      this.setState({ value });
      this.debouncedUpdateFunc(value)
    }

    return (
      <div>
        <span>{this.props.title}:</span>
        <input type="text" value={this.state.value || ''} onChange={(evt) => { onChange(evt.target.value) }} />
        {submitButton}
      </div>
    )
  }

  //helpers

  getUpdateObject(val) {
    const { fld } = this.props;
    if (!fld) {
      return val;
    }

    let updateObject = {};
    updateObject[fld] = val;
    return updateObject;
  }

  resetStateIfNeeded() {
    if (this.props.resetOnClick) {
      this.setState({ value: '' })
    }

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
