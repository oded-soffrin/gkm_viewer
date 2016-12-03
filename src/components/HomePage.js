import React from 'react';
import {Link} from 'react-router';
import Header from './Header';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (

        <div className="home-page">

          <Header />
          <img width="100%" src={require('../images/first.jpg')}/>


          <Link className="button" to="/about">Who are we?</Link>
          <Link className="button" to="/shop">Let's shop!</Link>

          <h2>Eliran! you took all the papers I can't remember the design...</h2>
        </div>
    );
  }
}

export default HomePage;
