import React from 'react';
import {Link} from 'react-router';
import Header from './Header';
import SearchBar from './SearchBar';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  componentDidMount() {
    this.props.actions.loadItems();
  }

  render() {
    return (

        <div className="home-page">

          <Header />
          <img width="100%" src={require('../images/first.jpg')}/>


          <Link className="button" to="/about">Who are we?</Link>
          <Link className="button" to="/shop">Let's shop!</Link>
          <SearchBar listings={this.props.data.listings} />

        </div>
    );
  }
}

export default HomePage;
