
import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import '../../styles/insta-stats.scss'

const imgMap = {
  d: 'https://instagram.ftlv1-2.fna.fbcdn.net/t51.2885-19/s150x150/18095129_753964814784600_2717222797960019968_a.jpg',
  e: 'https://instagram.ftlv1-2.fna.fbcdn.net/t51.2885-19/s150x150/12071219_1640349196212432_2045004332_a.jpg',
  k: 'https://instagram.ftlv1-2.fna.fbcdn.net/t51.2885-19/s150x150/18512724_1809268792724740_5337121181726146560_a.jpg'
}
const InstaCelebs = ({instaCeleb}) => {
  console.log('instaCeleb', instaCeleb)

  const stats = _.map(instaCeleb.stats, (x, y) => (
    <div className='celeb'>
      <img src={imgMap[y]}/>
      <div className='data-box'>
        <i className='fa fa-heart'/>
        <div>{x.like || 0}</div>
      </div>
      <div className='data-box'>
        <i className='fa fa-comment'/>
        <div>{x.comment || 0}</div>
      </div>

    </div>
  ))
  return (
    <div className="wrapper">
      <div className="stats">
        <h1><img src='https://static.wixstatic.com/media/8b1232_99ff6bf44fc74a22a9cc5ef7b578c1b1~mv2.png' /> Stats - Last 24h</h1>
        {stats}
      </div>
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


