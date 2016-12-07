
import React, {PropTypes} from 'react';
import Header from '../Header';


class ProductPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadItems();
  }

  componentDidUpdate() {
    console.log('PP', this.props);

  }

  get listing () {
    return this.props.listing || {};
  }

  get images () {
    return this.listing.images || [];
  }

  get title () {
    return this.listing.title
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
            <img src={this.images[1].url_570xN} />
          </div>
          <div className="sec-image">
            <img src={this.images[2].url_570xN} />
          </div>
          <div className="sec-image">
            <img src={this.images[3].url_570xN} />
          </div>
        </div>
      </div>);
    }

    return (
        <div className="product-page">
          <Header />
          <h2>{this.title}</h2>
          {imagesPanel}
        </div>
    );
  }
}

ProductPage.propTypes = {
  actions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  listing: PropTypes.object
};

export default ProductPage;


