import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/etsy">ETSY</Link>
      {' | '}
      <Link to="/gkm">GKM</Link>
      {' | '}
      <Link to="/ig">IG</Link>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
