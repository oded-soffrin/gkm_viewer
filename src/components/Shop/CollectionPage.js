
import React, {PropTypes} from 'react';
import _ from 'lodash';
import ShopListing from './ShopListing';
import Header from '../Header';

class CollectionPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    let itemsList = _.map(this.props.products, (l, idx) => {
      let selectedProps = (this.props.itemSelected.idx == idx) ? {selected: true, selectedCnt: this.props.itemSelected.cnt} : {selected: false}
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
        </div>
    );
  }
}

CollectionPage.propTypes = {
  products: PropTypes.array.isRequired,
  collectionId: PropTypes.string.isRequired,
  itemSelected: PropTypes.object.isRequired,
  galleryItemClick: PropTypes.func.isRequired
};

export default CollectionPage;


