import React, {PropTypes} from 'react';
import $ from 'jquery';
import '../styles/gkm-home-page.scss';
import {API_URL} from '../constants/consts';
import Tweet from './Twitter/tweet';
import EtsyListing from './Etsy/EtsyListing';


class GKMHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {latest_tweets: [], next_items_to_tweet: []};

  }

  componentDidMount() {
    $.get(API_URL + '/valid_tweets', (valid_tweets) => {
      this.setState({
        latest_tweets: valid_tweets
      });
    });

    $.get(API_URL + '/next_items_to_tweet', (next_items_to_tweet) => {
      this.setState({
        next_items_to_tweet: next_items_to_tweet
      });
    });
  }


  render() {

    let tweets = [];
    for (let i = 0; i < this.state.latest_tweets.length; i++) {
      tweets.push(<Tweet data={this.state.latest_tweets[i]} />);
    }
    let next_items = [];
    for (let i = 0; i < this.state.next_items_to_tweet.length; i++) {
      next_items.push(<EtsyListing etsyFu={true} type="gallery" data={this.state.next_items_to_tweet[i]} />);
    }


    return (
        <div>
          <h2 className="alt-header">GKM</h2>
          <div>
            <h3>Next posts</h3>
            {next_items}
          </div>

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
