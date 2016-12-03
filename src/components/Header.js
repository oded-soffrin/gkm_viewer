import React from 'react';
import {Link} from 'react-router';

class Header extends  React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div className="header">
          <Link to="/" className="logo header-element">
            <img src={require('../images/logo.jpg')}/>
          </Link>
          <div className="menu header-element">Menu</div>
        </div>
    );
  }
}

export default Header;
