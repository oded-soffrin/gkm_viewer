import React, {PropTypes} from 'react';
import _ from 'lodash';

class EtsyCategory extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let nextCategories = [];

    let next = this.props.nextCategories;
    if (this.props.active && next) {

      _.each(next, (nextCategory, cat) => {
        let className = ["category2"];

        //TODO: is active on second category
        nextCategories.push(
            <div className={className}>
              <div onClick={() => {this.props.onSelectCategory(cat, 2);}} className="title">{cat}</div>
            </div>
        );
      });
    }

    let className = ["category", this.props.active ? 'active' : ''].join(' ');
    let category = this.props.category;
    return (
        <div className={className}>
          <div onClick={() => {this.props.onSelectCategory(category);}} className="title">{category}</div>
          {nextCategories}
        </div>)
        ;
  }

}

EtsyCategory.propTypes = {
  data: PropTypes.object.isRequired,
  nextCategories: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired

};


class EtsyCategories extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let cats = this.props.data;
    let catElements = [];
    catElements.push(<EtsyCategory category={'ALL'} active={this.props.current[0] == 'ALL'} onSelectCategory={this.props.onSelectCategory} />);
    _.each(cats, (nextCategories,cat) => {
      catElements.push(<EtsyCategory category={cat} nextCategories={nextCategories} active={this.props.current[0] == cat} onSelectCategory={this.props.onSelectCategory} />);
    });

    return (<div>
      {catElements}
    </div>);
  }

}

EtsyCategories.propTypes = {
  data: PropTypes.object.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
};

export default EtsyCategories;
