
import React, {PropTypes} from 'react';
import Header from '../Header';


class ProductPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  get product () {
    return this.props.product || {};
  }

  get images () {
    return this.product.images || [];
  }

  get title () {
    return this.product.title
  }

  render () {


    let imagesPanel = '';
    if (this.images[0]) {
      imagesPanel = (<div className="images-panel">
        <div className="main-image">
          <img src={this.images[0].url_570xN} />
        </div>
        <div className="thumbnails">
          <div className="sec-image">
            <img src={(this.images[1] || {}) .url_570xN} />
          </div>
          <div className="sec-image">
            <img src={(this.images[2] || {}) .url_570xN} />
          </div>
          <div className="sec-image">
            <img src={(this.images[3] || {}) .url_570xN} />
          </div>
        </div>
      </div>);
    }

    return (
        <div className="product-page">
          <Header />
          <h2>{this.title}</h2>
          {imagesPanel}
          <div className="button" onClick={this.props.onAddToCartClicked}>Add to Cart</div>


        </div>
    );
  }
}

ProductPage.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductPage;


