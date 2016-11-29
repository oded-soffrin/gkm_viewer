import React from 'react';
import {Link} from 'react-router';
const ShopPage = () => {
  return (
    <div className="shop-page">
      <img width="100%" src={require('../images/logo.jpg')} />


      Categories...

      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default ShopPage;
