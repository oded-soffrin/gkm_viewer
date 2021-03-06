import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Admin = (props) => {
  return (
    <div>
      <IndexLink to="/admin">Home</IndexLink>
      {' | '}
      <Link to="/admin/items">Items</Link>
      {' | '}
      <Link to="/admin/gkm">Twitter</Link>
      {' | '}
      <Link to="/admin/next-listings">Next Listings</Link>
      {' | '}
      <Link to="/admin/etsy-product-items">Etsy Product Items</Link>
      {' | '}
      <Link to="/admin/products-container">Products Container</Link>
      {' | '}
      <Link to="/admin/ig">IG</Link>
      {' | '}
      <Link to="/about">About</Link>
      <br />
      {props.children}
    </div>
  );
};

Admin.propTypes = {
  children: PropTypes.element
};

export default Admin;
