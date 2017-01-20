import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateProduct} from '../../actions'
import { getNextItemsToTweet } from '../../actions/gkmActions'

import NextListingPage from '../../components/GKM/NextListingsPage'

const NextListingPageContainer = ({ nextTweets, updateProduct, getNextItemsToTweet}) => (
  <NextListingPage
      nextTweets={nextTweets}
      onUpdateProduct={updateProduct}
      getNextItemsToTweet={getNextItemsToTweet}
    />
)

NextListingPageContainer.propTypes = {
  nextTweets: PropTypes.array.isRequired,
  updateProduct: PropTypes.func.isRequired,
  getNextItemsToTweet: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  nextTweets: state.gkm.nextTweets,
})

export default connect(
  mapStateToProps,
  { updateProduct, getNextItemsToTweet }
)(NextListingPageContainer)
