
import React from 'react';
import { connect } from 'react-redux'

const InstaCelebs = ({instaCeleb}) => {
  console.log('instaCeleb', instaCeleb)
  return (
    <div className="stats">
      Stats:
      <div>Karen</div>
      <div>Donna...</div>

    </div>
  )
}


const mapStateToProps = (state) => ({
  instaCeleb: state.instaCeleb
})

const InstaCelebsConnected = connect(
    mapStateToProps,
    {  }
)(InstaCelebs)


export default InstaCelebsConnected


