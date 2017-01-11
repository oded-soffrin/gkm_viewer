import React, {PropTypes} from 'react';
import '../../styles/gkm-home-page.scss';
import {API_URL} from '../../constants/consts';
import EtsyListing from '../Etsy/EtsyListing';

class NextListingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {next_items_to_tweet: []};

  }

  componentDidMount() {
    $.get(API_URL + '/next_items_to_tweet', (next_items_to_tweet) => {
      this.setState({
        next_items_to_tweet: next_items_to_tweet
      });
    });
  }

  render() {
    let next_items = [];
    for (let i = 0; i < this.state.next_items_to_tweet.length; i++) {
      next_items.push(<EtsyListing etsyFu={true} type="gallery" data={this.state.next_items_to_tweet[i]} />);
    }

    return (
        <div className="etsy-fu-page">
          <h2 className="alt-header">GKM</h2>
          <div>
            <h3>Next posts</h3>
            {next_items}
          </div>
        </div>
    );
  }
}

NextListingsPage.propTypes = {
  data: PropTypes.object.isRequired
};


export default NextListingsPage;
