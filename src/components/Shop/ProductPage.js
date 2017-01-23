
import React, {PropTypes} from 'react';
import Header from '../Header';
import _ from 'lodash'

class ProductPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {idx: 0, info: false}
  }

  get product () {
    return this.props.product || {};
  }

  get images () {
    return this.product.images || [];
  }

  get title () {
    return (this.product.name || (this.product.title && this.product.title.slice(0, 20)));
  }

  get description () {
    return (this.product.shortDescription || (this.product.description && this.product.description.slice(0, 100)));
  }

  get price () {
    return '$' +(this.product.price);
  }

  onClick(idx) {
    this.setState({idx})
  }

  toggleInfo() {
    this.setState({info: !this.state.info});
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

    let info = '';
    if (this.state.info) {
      info = (
          <div className="info">
            <div className="section">
              <div className="section-title">Processing Time</div>
              <ul>
                <li>In Stock: 2-5 days</li>
                <li>Made to order: 7-14 days</li>
              </ul>
            </div>
            <div className="section">
              <div className="section-title">Item info</div>
              <ul>
                <li>Pendent size: 5"</li>
                <li>bracelet Length: yada yada</li>
              </ul>
            </div>
          </div>
      );

    }

    if (this.images[0]) {
      imagesPanel = (<div className="images-panel">
        <div className="main-image" onClick={() => this.toggleInfo()}>
          <div className={"info-button info-" + (this.state.info ? 'enabled' : 'disabled') }>
            <i className={"fa fa-" + (this.state.info? 'times' : 'info')} />
          </div>
          {info}

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
          <div className="top-info">
            <h1>{this.title}</h1>
            <h2>{this.description}</h2>
            <div className="price">{this.price} </div>
          </div>

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


