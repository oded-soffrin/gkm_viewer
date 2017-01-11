import React, {PropTypes} from 'react';
import {browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
     let details_inner = (
         <div className="listing-details">
           <div className="title">
             {e.description}
           </div>
           <div className="more">
             <div className="button" onClick={() => this.onMore(e)}>See More</div>
           </div>
         </div>
     );

      details = (
          <ReactCSSTransitionGroup
              transitionName="details"
              transitionAppear={true}
              transitionAppearTimeout={100}
              transitionEnter={false}
              transitionLeave={false}>
            {details_inner}
          </ReactCSSTransitionGroup>
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
                <div className="img" style={{backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundImage: "url('" + image.url_570xN + "')"}} />
                <div className="name">{e.name || e.title}</div>
            </div>

              {details}

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
  