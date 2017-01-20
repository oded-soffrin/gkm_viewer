import React, {PropTypes} from 'react';
import '../../styles/gkm-home-page.scss';
import Tweet from '../Twitter/tweet';

class GKMHomePage extends React.Component {

  componentDidMount() {
    this.props.getValidTweets();
  }

  render() {

    let tweets = [];
    for (let i = 0; i < this.props.latestTweets.length; i++) {
      tweets.push(<Tweet data={this.props.latestTweets[i]} />);
    }

    return (
        <div className="twitter-gkm">
          <h2 className="alt-header">GKM</h2>
          <div>
            <h3>Valid tweets</h3>
            {tweets}
          </div>

        </div>
    );
  }
}

GKMHomePage.propTypes = {
  getValidTweets: PropTypes.func.isRequired,
  latestTweets: PropTypes.object.isRequired,

};


export default GKMHomePage;
