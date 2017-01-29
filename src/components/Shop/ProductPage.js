
import React, {PropTypes} from 'react';
import Header from '../Header';
import '../../styles/product-page.scss'
import BulletList from '../BulletList'
import Footer from '../Footer'
import {browserHistory } from 'react-router';
import ShopListing from './ShopListing';

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

  camelCaseToRegular (camelCase) {
    return camelCase.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => (str.toUpperCase()))
  }

  render () {

    console.log('props!' , this.props);

    let imageIdxs = [0, 1, 2, 3];
    _.remove(imageIdxs, (e) => {return e == this.state.idx});

    let secImages = _.map(imageIdxs, (i) => {
      return (<div className="sec-image">
        <div className="cover-img" onClick={() => this.onClick(i)} style={{height: '100%', backgroundImage: "url('" + (this.images[i] || {}) .url_570xN + "')"}} />
      </div>)
    });


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

    let imagesPanel = '';
    if (this.images[0]) {
      imagesPanel = (<div className="images-panel">

        <div className="main-image" onClick={() => this.toggleInfo()}>
          <div className={"info-button info-" + (this.state.info ? 'enabled' : 'disabled') } >
            <i className={"fa fa-" + (this.state.info? 'times' : 'info')} />
          </div>
          {info}

          <div className="cover-img" style={{height: '250px', backgroundImage: "url('" + this.images[this.state.idx].url_570xN + "')"}} />

        </div>
        <div className="thumbnails">
          {secImages}
        </div>
      </div>);
    }

    let platingOptions = ['gold', 'silver', 'roseGold'];

    let platings = (
        <div className="platings">
          <div className="title">Pick a plating</div>
          {_.map(platingOptions, (o) => (
              <div className="option">
                <div className="option-title">{this.camelCaseToRegular(o)} </div>
                <div className={"option-display " + o} />
              </div>
          ))}
        </div>
    );

    let bulletItems = [
      {
        icon: 'paper-plane',
        name: 'Shipping',
        link: '/shipping'
      },
      {
        icon: 'info-circle',
        name: 'Plating & Finish Info',
        link: '/platings_finish'
      }
    ];



    let itemsList = _.map(this.props.relatedProducts, (l, idx) => (
        <ShopListing
          idx={idx}
          key={l.url}
          data={l}
          onSelect={() => {browserHistory.push('/shop/' + l.listing_id);}}
      />
    ));

    return (
        <div>
          <div className="product-page">
            <Header />
            <div className="top-info">
              <h1>{this.title}</h1>
              <h2>{this.description}</h2>
              <div className="price">{this.price} </div>
            </div>

            {imagesPanel}

            {platings}

            <BulletList items={bulletItems}/>

            <div className="button" onClick={this.props.onAddToCartClicked}>Add to Shopping Bag</div>

            <div className="other-products">
              <div className="title">Maybe You'll Fancy These:</div>
              {itemsList}
            </div>

        </div>
        <Footer />
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


