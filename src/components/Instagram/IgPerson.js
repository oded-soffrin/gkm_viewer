import React, {PropTypes} from 'react';

class IgPerson extends React.Component {

  unfollow(event) {
    event.preventDefault();
    this.props.onUnfollow(this.props.data.id, 'https://instagram.com/'+ this.props.data.username);
  }

  render() {
    let e = this.props.data;
    return (<div className="IgPerson">
      <a href={"https://instagram.com/" + e.username} onClick={this.unfollow.bind(this)}  target="_blank">
        <img src={e.profilePicture} />
        Remove & Unfollow - {e.fullName} ({e.username})
      </a>
    </div>);
  }

}

IgPerson.propTypes = {
  data: PropTypes.object.isRequired,
  onUnfollow: PropTypes.func.isRequired
};

export default IgPerson;
  