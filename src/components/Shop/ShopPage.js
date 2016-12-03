
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import ShopListing from './ShopListing';
import Header from '../Header';


class ShopPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadItems();
  }

  render () {
    let current_cats = this.props.data.category;
    let catsList, cats, step, title;
    if (current_cats.length > 1) {
      title = _.last(current_cats)
      ;
      catsList = [];
      let idx = 0;
      for (let i = 0; i < this.props.data.listings.length; i++) {
        let l = this.props.data.listings[i];

        let isInCategory = true;
        let cat_path = l['category_path'];
        _.each(cat_path, (current_item_c, i) => {
          if (i < current_cats.length && current_item_c != current_cats[i]) {
            isInCategory = false;
          }
        });

        if (isInCategory) {
          catsList.push(<ShopListing idx={idx} key={l.url} data={l} selected={this.props.data.itemSelected == idx} onSelect={this.props.actions.galleryItemClick}/>);
          idx += 1;
        }
      }
    } else {
      if (current_cats.length > 0 && current_cats[0] != 'ALL') { //selected
        step = 2;
        cats = this.props.data.categories[current_cats[0]];
      } else {
        step = 1;
        cats = this.props.data.categories;
      }
      title = 'Categories';
      catsList = _.map(cats, (nextCategories,cat) => { return <div className="category" key={cat} onClick={() => {this.props.actions.categorySelect(cat, step);}}>{cat}</div>; });
    }

    return (
        <div className="shop-page">
          <Header />
          <h2>{title}</h2>

          {catsList}
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
    );
  }
}

ShopPage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ShopPage;


