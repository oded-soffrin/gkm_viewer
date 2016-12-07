import React, {PropTypes} from 'react';
import {browserHistory } from 'react-router';

class ShopListing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onMore (listing) {
    browserHistory.push('/shop/' + listing.id);

  }

  render() {
    let e = this.props.data;
    if (!e['images']) {
      return (<div />);
    }

    let details = '';

    if (this.props.selected) {
     details = (
         <div className="listing-details">
           <div className="title">
             {e.title}
           </div>
           <div className="more">
             <div className="button" onClick={() => this.onMore(e)}>I WANT IT!</div>
           </div>
         </div>
     );
    }

    return (
          <div className="listing gallery">
            <div onClick={() => this.props.onSelect(this.props.idx)}>
                <div className="img" style={{backgroundSize: 'cover',  backgroundImage: "url('" + e.images[this.props.selected ? 0 : 1].url_570xN + "')"}} />
            </div>
            {details}

          </div>);
  }

}

ShopListing.propTypes = {
  idx: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default ShopListing;
  