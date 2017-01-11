
import React, {PropTypes} from 'react';
import _ from 'lodash';
import ShopListing from './ShopListing';
import Header from '../Header';
import Headroom from 'react-headroom'
import {browserHistory } from 'react-router'
import '../../styles/headroom.scss'


class CollectionPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {

    let catsList = _.map(this.props.categories['Jewelry'], (nextCategories,cat) => {
      let selected = ((this.props.collectionId == cat) ? 'selected' : '');
      return <div className={'filter-button ' + selected} onClick={() => {browserHistory.push('/collection/' + cat);}}> {cat} </div>;
    });
    let itemsList = _.map(this.props.products, (l, idx) => {
      let selectedProps = (this.props.itemSelected.listingId == l.listing_id) ? {selected: true, selectedCnt: this.props.itemSelected.cnt} : {selected: false}
      return (<ShopListing
          idx={idx}
          key={l.url}
          data={l}
          onSelect={this.props.galleryItemClick}
          {...selectedProps}
      />)
    });

    return (
        <div className="shop-page">
          <Header />


          <h2>{this.props.collectionId}</h2>

          {itemsList}

          <Headroom disableInlineStyles={true}>
            <h4>Filter by:</h4>
            {catsList}
          </Headroom>


        </div>
    );
  }
}

CollectionPage.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired,
  itemSelected: PropTypes.object.isRequired,
  galleryItemClick: PropTypes.func.isRequired
};

export default CollectionPage;


