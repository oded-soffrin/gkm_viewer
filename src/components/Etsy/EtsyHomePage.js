import React, {PropTypes} from 'react';
import _ from 'lodash';
import '../../styles/etsy-home-page.scss';
import EtsyListing from './EtsyListing';
import PrettyJson from '../PrettyJson';
import EtsyCategories from './EtsyCategories';

class EtsyHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      config: {
        debug: false,
        type: "gallery"
      }
    };

  }

  componentDidMount() {
    this.props.actions.loadItems();
  }

  render() {
    let listings = [];
    let c = this.props.data.category;

    for (let i = 0; i < this.props.data.listings.length; i++) {
      let l = this.props.data.listings[i];
      let cat_path = l['category_path'];

      if (c[0] == 'ALL') {
        listings.push(<EtsyListing key={l.url} type={this.state.config.type} data={l} />);
      }

      else {
        let isInCategory = true;
        _.each(cat_path, (current_item_c, i) => {
          if (i < c.length && current_item_c != c[i]) {
            isInCategory = false;
          }
        });

        if (isInCategory) {
          listings.push(<EtsyListing key={l.url} type={this.state.config.type} data={l}/>);
        }
      }
    }

    let etsyCategories = <EtsyCategories current={c} data={this.props.data.categories} onSelectCategory={this.props.actions.categorySelect} />;

    return (
        <div>
          <h2 className="alt-header">GKM</h2>

          <div>
            <h3>categories - {this.props.data.category.join(' ~ ')}</h3>

            {this.state.config.debug ? (<PrettyJson data={this.props.data.categories}/>) : ''}
            {etsyCategories}
            {this.state.config.debug ? (<PrettyJson data={this.props.data.listings[0]}/>) : ''}

            <h3>listings {listings.length}</h3>
            {listings}
          </div>

        </div>
    );
  }
}

EtsyHomePage.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};



export default EtsyHomePage;
