import React, {PropTypes} from 'react';

class ShopListing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let e = this.props.data;
    if (!e['images']) {
      return (<div />);
    }

    let details = '';

    if (this.props.selected) {
     details = (
         <div className="listing-details">
           {e.title}
         </div>
     );
    }

    return (
          <div className="listing gallery">
            <div onClick={() => this.props.onSelect(this.props.idx)}>
                <div className="img" style={{backgroundSize: 'cover',  backgroundImage: "url('" + e.images[this.props.selected ? 0 : 1].url_570xN + "')"}} />
            </div>
            {details}

          </div>);
  }

}

ShopListing.propTypes = {
  idx: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default ShopListing;
  