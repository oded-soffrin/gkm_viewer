import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getValidTweets} from '../../actions/gkmActions'

import GKMHomePage from '../../components/GKM/GKMHomePage'

const GKMHomePageContainer = ({ getValidTweets, latestTweets}) => (
  <GKMHomePage
      getValidTweets={getValidTweets}
      latestTweets={latestTweets}
    />
)

GKMHomePageContainer.propTypes = {
  latestTweets: PropTypes.array.isRequired,
  getValidTweets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  latestTweets: state.gkm.latestTweets,
})

export default connect(
  mapStateToProps,
  { getValidTweets}
)(GKMHomePageContainer)
