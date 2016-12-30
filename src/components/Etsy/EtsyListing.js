import React, {PropTypes} from 'react';
import $ from 'jquery';
import {API_URL} from '../../constants/consts';


class EtsyListing extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      twitterTitle: this.props.data.twitterTitle
    };
  }

  isGallery() {
    return (this.props.type == 'gallery');
  }

  isEtsyFu () {
    return (this.props.etsyFu == true);
  }

  updateDb () {
    let listing = this.props.data;
    let twitterTitle = this.state.twitterTitle;
    $.ajax({
      type: "PUT",
      url: API_URL + '/listing/' + listing.listing_id,
      contentType: 'application/json',
      data: JSON.stringify({twitterTitle}),
      success: (r) => {
        console.log(r);
      }
    });
  }

  updateInputValue(evt) {
    this.setState({
      twitterTitle: evt.target.value
    });
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
        <h6>update twiiter message:</h6>
        <input id={'twitterTitleInput' + e.id} type="text" maxLength="90" defaultValue={this.state.twitterTitle} onChange={(evt) => this.updateInputValue(evt)}/>
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
  type: PropTypes.string,
  etsyFu: PropTypes.bool
};

export default EtsyListing;
  