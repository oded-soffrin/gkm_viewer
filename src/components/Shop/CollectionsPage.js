
import React, {PropTypes} from 'react';
import _ from 'lodash';
import Header from '../Header';
import ProductsHoC from "../../containers/ProductsHoC"
import {browserHistory } from 'react-router'
import SectionButton from '../SectionButton'
import Footer from '../Footer'

class CollectionsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    let catsList = _.map(this.props.categories['Jewelry'], (nextCategories,cat) => {
      let rand = Math.floor(Math.random() * 100);

      return <SectionButton type="section" img={this.props.products[rand].images[0].url_570xN} description={'some description...'} title={cat} onClick={() => {browserHistory.push('/collection/' + cat);}} />;
    });


    return (
        <div>
          <div className="shop-page">
            <Header />
            <h2>Collections</h2>

            {catsList}

          </div>
          <Footer />
        </div>
    );
  }
}

CollectionsPage.propTypes = {
  categories: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductsHoC(CollectionsPage);


