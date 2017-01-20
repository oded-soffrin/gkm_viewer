import React, {PropTypes} from 'react';
import '../../styles/gkm-home-page.scss';
import EtsyListing from '../Etsy/EtsyListing';


//connect this one

class NextListingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    this.props.getNextItemsToTweet();
  }

  render() {

    let next_items = [];
    for (let i = 0; i < this.props.nextTweets.length; i++) {
      next_items.push(<EtsyListing etsyFu={true} type="gallery" data={this.props.nextTweets[i]} onUpdateProduct={this.props.onUpdateProduct} />);
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
  nextTweets: PropTypes.object.isRequired,
  onUpdateProduct: PropTypes.func.isRequired,
  getNextItemsToTweet: PropTypes.func.isRequired
};


export default NextListingsPage;
