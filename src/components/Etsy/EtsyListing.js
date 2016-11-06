import React, {PropTypes} from 'react';

class EtsyListing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  isGallery() {
    return (this.props.type == 'gallery');
  }

  render() {
    let e = this.props.data;
    let className = ["listing", this.props.type].join(' ');
    return (<div className={className}>

      <a href={e.url} target="_blank">
        <img src={e.images[0].url_570xN} />
        {!this.isGallery() ? <div className="title">{e.title} </div> : ''}
      </a>
      {!this.isGallery() ? <div>{e.description}</div> : ''}
    </div>);
  }

}

EtsyListing.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default EtsyListing;
  