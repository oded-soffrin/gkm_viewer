import React, {PropTypes} from 'react';

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

    let update = '';

    if (this.isEtsyFu()) {
      update = (<div>
        <h6>update twiiter message:</h6>
        <input type="text" maxLength="90"/>
        <button onClick={() => {alert('I should update the DB but i\'m too tired');}}> update </button>
      </div>);
    }
    return (<div className={classNameStr}>
      <a href={e.url} target="_blank">
        <img src={e.images[0].url_570xN} />
        {!this.isGallery() ? <div className="title">{e.title} </div> : ''}
        {this.isEtsyFu() ? <div className="title">{e.title.slice(0,88)}...(LINK) </div> : ''}
      </a>
      {!this.isGallery() ? <div>{e.description}</div> : ''}

      {update}
    </div>);
  }

}

EtsyListing.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string,
  etsyFu: PropTypes.bool
};

export default EtsyListing;
  