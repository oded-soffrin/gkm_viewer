
import React, {PropTypes} from 'react';
import _ from 'lodash';
import Header from '../Header';
import ProductsHoC from "../../containers/ProductsHoC"
import {browserHistory } from 'react-router';


class Category extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
        <div className="category" key={this.props.title} onClick={this.props.onClick}>
          <div className="cat-title">{this.props.title}</div>
          <div className="cat-body" style={{backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundImage: "url('" + this.props.img.url_570xN + "')"}} >
            <div className="cat-description">Some Description</div>
          </div>
        </div>
    )
  }
}

class CollectionsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    let current_cats = this.props.category;
    let catsList, cats,  title;

    if (current_cats.length > 0 && current_cats[0] != 'ALL') { //selected
      cats = this.props.categories[current_cats[0]];
    } else {
      cats = this.props.categories;
    }
    title = 'Collections';

    catsList = _.map(cats, (nextCategories,cat) => {
      let rand = Math.floor(Math.random() * 100);



      return <Category img={this.props.products[rand].images[0]} title={cat} onClick={() => {browserHistory.push('/collection/' + cat);}} />;
    });


    return (
        <div className="shop-page">
          <Header />
          <h2>{title}</h2>

          {catsList}
        </div>
    );
  }
}

CollectionsPage.propTypes = {
  categories: PropTypes.object.isRequired,
  category: PropTypes.array.isRequired,
  itemSelected: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  categorySelect: PropTypes.func.isRequired,
  galleryItemClick: PropTypes.func.isRequired
};

export default ProductsHoC(CollectionsPage);


