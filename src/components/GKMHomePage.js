import React, {PropTypes} from 'react';
import $ from 'jquery';
import '../styles/gkm-home-page.scss';
import {API_URL} from '../constants/consts';
import Tweet from './Twitter/tweet';

class GKMHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {latest_tweets: []};

  }

  componentDidMount() {
    $.get(API_URL + '/valid_tweets', (valid_tweets) => {
      this.setState({
        latest_tweets: valid_tweets
      });
    });
  }

  render() {

    let tweets = [];
    for (let i = 0; i < this.state.latest_tweets.length; i++) {
      tweets.push(<Tweet data={this.state.latest_tweets[i]} />);
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
  data: PropTypes.object.isRequired
};


export default GKMHomePage;
