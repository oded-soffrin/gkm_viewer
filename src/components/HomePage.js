import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from './Header';
import ProductsHoC from "../containers/ProductsHoC"
import SectionButton from './SectionButton'
import {browserHistory } from 'react-router';



class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.products.length == 0) {
      return <div>loading</div>;
    }
    let rand = Math.floor(Math.random() * 100);

    let sectionButtonsTexts = [
      {
        title: 'Best Seller',
        description: "See what other people liked about us"
      },
      {
        title: 'On sale',
        description: "We like to share our love"
      },
      {
        title: 'Special Requests',
        description: "We understand people who like it their own way"
      }

    ];

    let sectionButtons = _.map(sectionButtonsTexts, (s) => {
      let rand = Math.floor(Math.random() * 100);
      return (<SectionButton type="home" img={this.props.products[rand].images[0].url_570xN} title={s.title} description={s.description} onClick={() => {browserHistory.push('/test');}} />)
    })

    return (
        <div className="home-page">

          <Header />
          <img width="100%" src={require("../images/first.jpg")}/>
          <Link className="button" to="/collection">Let's shop!</Link>

          <div className="text-info-section">
            <div>We have made</div>
            <div>1,345</div>
            <div>smiles appear</div>
            <div>around the world</div>
            <div>(;</div>
          </div>

          <Link className="button" to="/about">Behind the scenes</Link>

          {sectionButtons}

          <div className="bullet-list">
            <div><i className="fa fa-info-circle"/> <span className='bullet-text'> Shipping & Payments </span></div>
            <div><i className="fa fa-gear fa-spin"/> <span style={{paddingLeft: '10px'}}> About us </span></div>
            <div><i className="fa fa-comment"/> <span style={{paddingLeft: '10px'}}> Let's connect </span></div>
          </div>
        </div>
    );
  }
}


HomePage.propTypes = {
  products: PropTypes.array.isRequired

};


export default ProductsHoC(HomePage);
