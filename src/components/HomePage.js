import React from 'react';
import {Link} from 'react-router';
const HomePage = () => {
  return (
    <div className="home-page">
      <img width="100%" src={require('../images/logo.jpg')} />
      <img width="100%" src={require('../images/first.jpg')} />



      <Link className="button" to="/about">Who are we?</Link>
      <Link className="button" to="/shop">Let's shop!?</Link>

      <h2>Eliran! you too all the papers I can't remember the design...</h2>
    </div>
  );
};

export default HomePage;
