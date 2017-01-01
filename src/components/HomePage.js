import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import Header from './Header';
import ProductsHoC from "../containers/ProductsHoC"
import SectionButton from './SectionButton'
import _ from 'lodash'

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  getRandomImage() {
    if (this.props.products.length == 0) {
      return require("../images/first.jpg");
    } else {
      let rand = Math.floor(Math.random() * 100);
      return this.props.products[rand].images[0].url_570xN;
    }
  }

  render() {


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
      return (<SectionButton type="home" img={this.getRandomImage()} title={s.title} description={s.description} onClick={() => {browserHistory.push("/test");}} />)
    })

    return (
        <div className="home-page">
          <div className="home-page-main">

            <Header />
            <img width="100%" src={require("../images/first.jpg")}/>
            <Link className="button" to="/collection">Let's shop!</Link>

            <div className="text-info-section">
              <div className="text-big">We have made</div>
              <div className="text-bigger">1,345</div>
              <div className="text-big">smiles appear</div>
              <div className="text-big">around the world</div>
              <div className="text-bigger">(;</div>
            </div>

            <Link className="button" to="/about">Behind the scenes</Link>

            {sectionButtons}

            <div className="bullet-list">
              <div className="bullet-item">
                <i className="fa fa-info-circle"/> <span className="bullet-text"> Shipping & Payments </span>
              </div>
              <div className="bullet-item"><i className="fa fa-gear fa-spin"/> <span className="bullet-text"><Link to="/about"> About us</Link></span></div>
              <div className="bullet-item"><i className="fa fa-comment"/> <span className="bullet-text"> Let's connect </span></div>
            </div>

            <div className="socials">
              <a className="icontain" href="https://www.instagram.com/urban_raven/" target="_new" ><i className="fa fa-instagram"/></a>
              <a className="icontain" href="https://twitter.com/urbanravenshop/" target="_new" ><i className="fa fa-twitter"/></a>
              <a className="icontain" href="https://www.facebook.com/urbanravenjewelry/" target="_new" ><i className="fa fa-facebook"/></a>
            </div>
          </div>

          <div className="home-page-footer">
            <div className="footer-title">
              <div className="text-normal">You have reached</div>
              <div className="text-big">this far?</div>
              <div className="text-normal">than, you have to see this</div>
            </div>

            <div className="footer-button">Our Secret Back Door</div>
            <div className="footer-line text-small">Urban Raven LTD. | Passion for life, love & art.</div>


          </div>
        </div>



    );
  }
}


HomePage.propTypes = {
  products: PropTypes.array.isRequired

};


export default ProductsHoC(HomePage);
