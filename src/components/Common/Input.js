import React, { PropTypes } from 'react'
import _ from 'lodash'
class Input extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {value: props.value}
  }

  componentWillReceiveProps(props) {
    console.log('got props!', props)
    this.setState({value: props.value})
  }

  updateInputValue(value) {
    console.log('fld', this.props.fld, 'v', value);
    let updateObject = {};
    updateObject[this.props.fld] = value;
    this.props.onUpdate ? this.props.onUpdate(this.props.id, updateObject) : '';
    this.setState({value});
  }

  render () {
    let waitTime = this.props.button ? 0 : 250
    let debouncedUpdateFunc = _.debounce((value) => this.updateInputValue(value), waitTime, { 'maxWait': 1000 });

    let submit = (this.props.button ? (<button onClick={() => this.props.button.action(this.state.value)}> {this.props.button.text} </button>) : '')
    return (
        <div>
          <span>{this.props.title}:</span>
          <input type="text" value={this.state.value} onChange={(evt) => debouncedUpdateFunc(evt.target.value)} />
          {submit}
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
