import React, {PropTypes} from 'react';
import '../../styles/etsy-home-page.scss';
import PrettyJson from '../PrettyJson';
import IgPerson from './IgPerson';

class IgHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadNonFollowers();
  }
  
  render() {

    let debug = false;
    let nonf = this.props.data.nonfollowers;
    let nonfObj = [];
    for (let i = 0; i < nonf.length; i++) {
      nonfObj.push(<IgPerson data={nonf[i]} onUnfollow={this.props.actions.onUnfollow} />);
    }
    return (
        <div>
          <h2 className="alt-header">Instagram</h2>

          <div>
            <h3>NonFollowers</h3>

            {debug ? (<PrettyJson data={this.props.data.nonfollowers}/>) : ''}
            {nonfObj}
          </div>

        </div>
  );
  }
  }

  IgHomePage.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };



  export default IgHomePage;
