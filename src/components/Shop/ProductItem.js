import React, { PropTypes } from 'react'
import _ from 'lodash'
import '../../styles/admin-styles.scss';

class ProductItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      debug: false,
      name: props.product.name
    }
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

  updateInputValue(fld, evt) {
    let updateObject = {};
    updateObject[fld] = evt.target.value;

    this.props.onUpdateProduct(this.props.product.listing_id, updateObject);
    this.setState(updateObject);
  }

  render () {
    //console.log('p', this.props.product);

    //Still this button to shop

    let product = this.props.product;
    let images = product.images;

    return (
        <div style={{ marginBottom: 20 }}>

          {this.productTable()}
          <div>
            {images ? <img src={images[0].url_75x75} /> : ''}
          </div>
          <div>
            <b>{product.title}</b>
          </div>
          <div>
            {product.description.slice(0,300) + '...'}
          </div>
          <div>
            ${product.price} x {product.quantity}
          </div>

          <div>
              <span>Name:</span>

              <input type="text" maxLength="20" defaultValue={this.state.name} onChange={(evt) => this.updateInputValue('name', evt)} />

          </div>




          <button onClick={() => {this.setState({debug: !this.state.debug}) }} >toggle debug</button>
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
    listing_id: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onUpdateProduct: PropTypes.func.isRequired
}

export default ProductItem
