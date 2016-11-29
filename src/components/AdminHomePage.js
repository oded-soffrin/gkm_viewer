import React from 'react';
import {Link} from 'react-router';

const AdminHomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>HomePage Menu</h2>
      <ol>
        <li><Link to="/admin/gkm">GKM</Link></li>
        <li><Link to="/admin/etsy">Etsy</Link></li>
        <li><Link to="/admin/ig">IG</Link></li>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
      </ol>

    </div>
  );
};

export default AdminHomePage;
