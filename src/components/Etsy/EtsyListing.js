import React, {PropTypes} from 'react';
import Input from '../Common/Input'
class EtsyListing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  isGallery() {
    return (this.props.type == 'gallery');
  }

  isEtsyFu () {
    return (this.props.etsyFu == true);
  }


  render() {
    let e = this.props.data;
    if (!e['images']) {
      return (<div />);
    }

    let className = ["listing", this.props.type];

    if (this.isEtsyFu()) {
      className.push('etsy-fu');
    }
    let classNameStr = className.join(' ');

    let etsuFu = '';

    if (this.isEtsyFu()) {
      etsuFu = (<div>
        <div className="description">{e.description.slice(0, 200)}... </div>
        <Input title="update twiiter message" id={this.props.data.listing_id} fld='twitterTitle' value={this.props.data.twitterTitle} onUpdate={this.props.onUpdateProduct} />
        <button onClick={() => {this.updateDb();}}> Update </button>
      </div>);

    }
    return (<div className={classNameStr}>
      <a href={e.url} target="_blank">
        <img src={e.images[0].url_570xN} />
        {!this.isGallery() ? <div className="title">{e.title} </div> : ''}

      </a>

      {!this.isGallery() ? <div>{e.description}</div> : ''}
      {etsuFu}
    </div>);
  }

}

EtsyListing.propTypes = {
  data: PropTypes.object.isRequired,
  onUpdateProduct: PropTypes.func.isRequired,
  type: PropTypes.string,
  etsyFu: PropTypes.bool
};

export default EtsyListing;
  