import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Admin = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/admin/etsy">ETSY</Link>
      {' | '}
      <Link to="/admin/gkm">GKM</Link>
      {' | '}
      <Link to="/admin/ig">IG</Link>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
  );
};

Admin.propTypes = {
  children: PropTypes.element
};

export default Admin;
