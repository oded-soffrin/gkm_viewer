import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';
import Header from './Header';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <h2 className="alt-header">About</h2>
      <p>
        Unique handmade designs by Shiran Tal Soffrin
      </p>

      <p>
        <Link to="/">Home</Link>
      </p>

    </div>
  );
};

export default AboutPage;
