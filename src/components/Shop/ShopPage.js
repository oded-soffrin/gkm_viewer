
import React, {PropTypes} from 'react';
import _ from 'lodash';
import ShopListing from './ShopListing';
import Header from '../Header';
import ProductsHoC from "../../containers/ProductsHoC"


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

class ShopPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    let current_cats = this.props.category;
    let catsList, cats, step, title;
    if (current_cats.length > 1) {

      //bring item according to categories

      title = _.last(current_cats)
      ;
      catsList = [];
      let idx = 0;
      for (let i = 0; i < this.props.products.length; i++) {
        let l = this.props.products[i];

        let isInCategory = true;
        let cat_path = l['category_path'];
        _.each(cat_path, (current_item_c, i) => {
          if (i < current_cats.length && current_item_c != current_cats[i]) {
            isInCategory = false;
          }
        });

        if (isInCategory) {
          let selectedProps = (this.props.itemSelected.idx == idx) ? {selected: true, selectedCnt: this.props.itemSelected.cnt} : {selected: false}

          catsList.push(<ShopListing
              idx={idx}
              key={l.url}
              data={l}
              onSelect={this.props.galleryItemClick}
              {...selectedProps}
          />);
          idx += 1;
        }
      }
    } else {
      //some categories for you
      console.log('current_cats', current_cats);
      if (current_cats.length > 0 && current_cats[0] != 'ALL') { //selected
        step = 2;
        cats = this.props.categories[current_cats[0]];
      } else {
        step = 1;
        cats = this.props.categories;
      }
      title = 'Categories';

      catsList = _.map(cats, (nextCategories,cat) => {

        console.log('cats', cat);
        let rand = Math.floor(Math.random() * 100);
        return <Category img={this.props.products[rand].images[0]} title={cat} onClick={() => {this.props.categorySelect(cat, step);}} />;
      });
    }

    return (
        <div className="shop-page">
          <Header />
          <h2>{title}</h2>

          {catsList}
        </div>
    );
  }
}

ShopPage.propTypes = {
  categories: PropTypes.object.isRequired,
  category: PropTypes.array.isRequired,
  itemSelected: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  categorySelect: PropTypes.func.isRequired,
  galleryItemClick: PropTypes.func.isRequired
};

export default ProductsHoC(ShopPage);


