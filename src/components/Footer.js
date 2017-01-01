import React, {PropTypes} from 'react';

const Footer = ({type}) => {

  let socials = (
      <div className="socials">
        <a className="icontain" href="https://www.instagram.com/urban_raven/" target="_new" ><i className="fa fa-instagram"/></a>
        <a className="icontain" href="https://twitter.com/urbanravenshop/" target="_new" ><i className="fa fa-twitter"/></a>
        <a className="icontain" href="https://www.facebook.com/urbanravenjewelry/" target="_new" ><i className="fa fa-facebook"/></a>
      </div>
  );

  let secret_back_door = (
      <div>
        <div className="footer-title">
          <div className="text-normal">You have reached</div>
          <div className="text-big">this far?</div>
          <div className="text-normal">than, you have to see this</div>
        </div>

        <div className="footer-button">Our Secret Back Door</div>
      </div>
  );
  return (
      <div className="footer">
        {type == 'big' ? socials : ''}
        <div className="background-section">
          {type == 'big' ? secret_back_door : socials}
          <div className="footer-line text-small">Urban Raven LTD. | Passion for life, love & art.</div>
        </div>
      </div>
  );
};



Footer.propTypes = {
  type: PropTypes.string
};

export default Footer

