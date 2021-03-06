import React, {PropTypes} from 'react';
import {browserHistory } from 'react-router';


class ShopListing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onMore (listing) {
    browserHistory.push('/shop/' + listing.listing_id);

  }

  render() {
    let e = this.props.data;
    if (!e['images']) {
      return (<div />);
    }

    let details = '';

    if (this.props.selected) {
      details = (
         <div>
           <div className="title">
             {e.description}
           </div>
           <div className="price">${e.price}</div>
           <div className="more">
             <div className="button" onClick={() => this.onMore(e)}>See More</div>
           </div>
         </div>
     );

    }


    let imgIdx = ((this.props.selected ? this.props.selectedCnt : 0) %  e.images.length)
    let image = e.images[imgIdx]
    if (!image) {
      return (<div />);
    }

    return (
          <div className={"gallery listing " + (this.props.selected ? 'selected' : '')}>
            <div onClick={() => this.props.onSelect(e.listing_id)}>
                <div className="cover-img" style={{backgroundImage: "url('" + image.url_570xN + "')"}} />
                <div className="name">{e.name || e.title}</div>
            </div>

            <div className="listing-details">
              {details}
            </div>

          </div>);
  }

}

ShopListing.propTypes = {
  idx: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  selectedCnt: PropTypes.number
};

export default ShopListing;
  