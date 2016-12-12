
import React, {PropTypes} from 'react';
import _ from 'lodash';
import ShopListing from './ShopListing';
import Header from '../Header';
import ProductsHoC from "../../containers/ProductsHoC"

class ShopPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    let current_cats = this.props.category;
    let catsList, cats, step, title;
    if (current_cats.length > 1) {
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
      if (current_cats.length > 0 && current_cats[0] != 'ALL') { //selected
        step = 2;
        cats = this.props.categories[current_cats[0]];
      } else {
        step = 1;
        cats = this.props.categories;
      }
      title = 'Categories';
      catsList = _.map(cats, (nextCategories,cat) => { return <div className="category" key={cat} onClick={() => {this.props.categorySelect(cat, step);}}>{cat}</div>; });
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


