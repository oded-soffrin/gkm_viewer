
import React from 'react';
import { connect } from 'react-redux'

const InstaCelebs = () => {
  console.log('state', state)
  return (
    <div className="stats">
      Stats:
      <div>Karen</div>
      <div>Donna...</div>

    </div>
  )
}


const mapStateToProps = (state) => ({
  state
})

const InstaCelebsConnected = connect(
    mapStateToProps,
    {  }
)(InstaCelebs)


export default InstaCelebsConnected


