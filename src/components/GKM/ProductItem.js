import React, { PropTypes } from 'react'
import _ from 'lodash'
import '../../styles/admin-styles.scss';

class ProductItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { debug: false };
  }

  productTable() {

    let keys = [];
    let vals = [];
    _.forOwn(this.props.product, (v, k) => {

      if (k == "_id") {
        return;
      }
      keys.push(<th>{k}</th>);
      vals.push(<td>{JSON.stringify(v, null, 2).slice(0, 200)}</td>);
    });
    return (
      <table className={"product-table " + (this.state.debug ? 'show' : 'hide')}>
        <thead>
          <tr>
            {keys}
          </tr>
        </thead>
        <tbody>
          <tr>
            {vals}
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    //Steal the button to shop

    const { product, createProductFromEtsyLIsting } = this.props
    let images = product.images;

    let infoSection = this.props.inProduct ? '' : (
      <div>
        <div>
          <b>{product.title}</b>
        </div>
        <div>
          {product.description && product.description.slice(0, 300) + '...'}
        </div>
        <div>
          ${product.price} x {product.quantity}
        </div>
      </div>
    )
    let addRemoveAction = this.props.inProduct ?
      (<button onClick={() => { console.log('not yet working', this.props) }} >Remove from product!</button>) :
      (<button onClick={() => { createProductFromEtsyLIsting(product) }} >create product!</button>)
    return (
      <div style={{ marginBottom: 20 }}>
        <h5>Product Item</h5>

        {this.productTable()}
        <div>
          {images ? <img src={images[0].url_170x135} /> : ''}
        </div>

        {infoSection}
        {addRemoveAction}
        <button onClick={() => { this.setState({ debug: !this.state.debug }) }} >toggle debug</button>
        <button
          onClick={this.props.onAddToCartClicked}
          disabled={this.props.product.quantity > 0 ? '' : 'disabled'}>
          {this.props.product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
        </button>


      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    listing_id: PropTypes.string.isRequired,
    twitterTitle: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onUpdateProduct: PropTypes.func.isRequired,
  inProduct: PropTypes.bool
}

export default ProductItem
