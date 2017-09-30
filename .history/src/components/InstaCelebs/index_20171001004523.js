
import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'


const InstaCelebs = ({instaCeleb}) => {
  console.log('instaCeleb', instaCeleb)

  const stats = _.map(instaCeleb.stats, (x,y) => <div>{y} - {x}</div>)
  return (
    <div className="stats">
      <h1>Stats</h1>
      {stats}
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


