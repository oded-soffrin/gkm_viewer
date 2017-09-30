import React from 'react'

import '../../styles/gkm-item.scss';
import ProductItem from './ProductItem'
import Input from '../Common/Input'
import SearchBar from '../SearchBar';
import _ from 'lodash'

class EtsyProduct extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.editables = {
      name: {
        max: 20,
        display: 'Name'
      },
      shortDescription: {
        max: 100,
        display: 'Short Description'
      },
      twitterTitle: {
        max: 100,
        display: 'Twitter Text'
      }
    };
  }


  onUpdateField(update) {
    console.log(update)
    let product = this.props.product
    _.each(update, (v, k) => {
      product[k] = v;
    })
    this.props.updateItem(product);
  }

  getListingById(id) {
    return _.find(this.props.listings, (l) => l.id === id)
  }

  editableFieldsHtml() {

    const { product } = this.props
    return (
      <div>
        {_.map(this.editables, (v, fld) => (
          <Input
            title={v.display}
            fld={fld}
            value={product[fld]}
            id={product.id}
            onUpdate={
              (i, update) => this.onUpdateField(update)
            }
          />))
        }
      </div>
    )
  }


  render() {

    const loader = (<div>loading...</div >)
    const productItems = this.props.product.populatedListings.map((listing) => (listing ? < ProductItem key={listing.id} product={listing} inProduct={true} /> : loader)

    return (
      <div className='gkm-etsy-product' id={this.props.product.id}>
        <h5>Etsy Product</h5>
        <div>
          Product Name: {this.props.product.name}
          {this.editableFieldsHtml()}
        </div>

        {productItems}

        <div> Add another listing: </div>
        <SearchBar products={
          this.props.listings
        }
          onSelect={
            (listingId) => {
              this.props.addListingToProduct(this.props.product, this.getListingById(listingId))
            }
          } />
      </div>
    )
  }


}

/*
 Item.propTypes = {

 };
 */

export default EtsyProduct
