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

  onAddtoCategory(category) {
    const { product, addItemtoCategory } = this.props;
    addItemtoCategory(product, category)
  }


  render() {

    const { product, listings, addListingToProduct } = this.props;
    const loader = (<div>loading...</div >)
    const productItems = product.populatedListings.map((listing) => (listing ? < ProductItem key={listing.id} product={listing} inProduct={true} /> : loader))

    return (
      <div className='gkm-etsy-product' id={product.id}>
        <h5>Etsy Product</h5>

        <div>
          Product Name: {product.name}
          <div>Categories:</div>
          {_.map(product.hashtags.all(), (hashtag) => (<div>{hashtag}</div>))}
          <Input title="add category" fld='category' resetOnClick={true} button={{ text: 'ADD!', action: (update) => { this.onAddtoCategory(update.category) } } />
            { this.editableFieldsHtml() }

        </div>

        {productItems}

          <div> Add another listing: </div>
          <SearchBar products={listings}
            onSelect={
              (listingId) => {
                addListingToProduct(product, this.getListingById(listingId))
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
