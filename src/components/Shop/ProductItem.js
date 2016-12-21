import React, { PropTypes } from 'react'
import Product from './Product'
import _ from 'lodash'

class ProductItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  productTable () {

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
        <table>
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

  render () {
    //console.log('p', this.props.product);

    //Still this button to shop

    return (
        <div style={{ marginBottom: 20 }}>

          {this.productTable()}
          <Product
              images={this.props.product.images}
              title={this.props.product.title}
              price={this.props.product.price} />



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
    images: PropTypes.array.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
