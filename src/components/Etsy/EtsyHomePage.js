import React, {PropTypes} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import '../../styles/etsy-home-page.css';
import EtsyListing from './EtsyListing';
import PrettyJson from '../PrettyJson';
import EtsyCategories from './EtsyCategories';

class EtsyHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      etsy_listings: [],
      config: {
        debug: false,
        type: "gallery"
      }
    };

  }

  componentDidMount() {
    $.get('https://localhost:4567/etsy_listings', (etsy_listings) => {
      this.setState(_.merge({}, this.state,{
        etsy_listings: etsy_listings
      }));
    });
  }


  render() {
    let listings = [];
    let categories = {};
    let c = this.props.data.category;

    for (let i = 0; i < this.state.etsy_listings.length; i++) {
      let l = this.state.etsy_listings[i];
      let cat_path = l['category_path'];

      //build categories array - should be only when updating items
      let cc = categories;
      _.each(cat_path, (c) => {
        cc = cc ||{};
        cc[c] = cc[c] || {};
        cc = cc[c];
      });



      if (c[0] == 'ALL') {
        listings.push(<EtsyListing type={this.state.config.type} data={l} />);
      }

      else {
        let isInCategory = true;
        _.each(cat_path, (current_item_c, i) => {
          if (i < c.length && current_item_c != c[i]) {
            isInCategory = false;
          }
        });

        if (isInCategory) {
          listings.push(<EtsyListing type={this.state.config.type} data={l}/>);
        }
      }
    }

    let etsyCategories = <EtsyCategories current={c} data={categories} onSelectCategory={this.props.onSelectCategory} />;

    return (
        <div>
          <h2 className="alt-header">GKM</h2>

          <div>
            <h3>categories - {this.props.data.category.join(' ~ ')}</h3>

            {this.state.config.debug ? (<PrettyJson data={categories}/>) : ''}
            {etsyCategories}
            {this.state.config.debug ? (<PrettyJson data={this.state.etsy_listings[0]}/>) : ''}

            <h3>listings {listings.length}</h3>
            {listings}
          </div>

        </div>
    );
  }
}

EtsyHomePage.propTypes = {
  data: PropTypes.object.isRequired,
  onSelectCategory: PropTypes.func.isRequired
};



export default EtsyHomePage;
