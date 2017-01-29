import React, {PropTypes} from 'react';
import _ from 'lodash'
import {Link} from 'react-router';
import '../styles/bullet-list.scss'

const BulletList = ({items}) => {

  return (
      <div className="bullet-list">
        {_.map(items, (bi) => (
            <div className="bullet-item">
              <i className={"fa fa-" + bi.icon}/>
              <span className="bullet-text">
                <Link to={bi.link}>
                  {bi.name}
                </Link>
              </span>
            </div>
        ))}
      </div>
  )
};


BulletList.propTypes = {
  items: PropTypes.array.isRequired
};

export default BulletList


