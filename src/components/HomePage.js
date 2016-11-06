import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>HomePage Menu</h2>
      <ol>
        <li><Link to="gkm">GKM</Link></li>
        <li><Link to="etsy">Etsy</Link></li>
        <li><Link to="ig">IG</Link></li>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
      </ol>

    </div>
  );
};

export default HomePage;
