
import React, {PropTypes} from 'react';
import Header from '../Header';
import _ from 'lodash'

class ProductPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {idx: 0}
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

  onClick(idx) {
    this.setState({idx})
  }

  render () {

    let imageIdxs = [0, 1, 2, 3];
    _.remove(imageIdxs, (e) => {return e == this.state.idx});

    let secImages = _.map(imageIdxs, (i) => {
      return (<div className="sec-image">
        <img src={(this.images[i] || {}) .url_570xN} onClick={() => this.onClick(i)} />
      </div>)
    });

    let imagesPanel = '';
    if (this.images[0]) {
      imagesPanel = (<div className="images-panel">
        <div className="main-image">
          <img src={this.images[this.state.idx].url_570xN}  />
        </div>
        <div className="thumbnails">
          {secImages}
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


