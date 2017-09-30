
import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'


const imgMap = {
  d: 'https://instagram.ftlv1-2.fna.fbcdn.net/t51.2885-19/s150x150/18095129_753964814784600_2717222797960019968_a.jpg',
  e: 'https://instagram.ftlv1-2.fna.fbcdn.net/t51.2885-19/s150x150/12071219_1640349196212432_2045004332_a.jpg'
}
const InstaCelebs = ({instaCeleb}) => {
  console.log('instaCeleb', instaCeleb)

  const stats = _.map(instaCeleb.stats, (x, y) => (
    <div>
      <img src={imgMap[y]}/>
      <div>{y} - like {x.like} - comment {x.comment}</div>
    </div>
  ))
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


