import React, {PropTypes} from 'react';

class SectionButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
        <div className={"section-button " + this.props.type} key={this.props.title} onClick={this.props.onClick}>
          <div className="button-text">{this.props.title}</div>
          <div className="button-body" style={{backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundImage: "url('" + this.props.img + "')"}} >
            <div className="button-description">{this.props.description}</div>
          </div>
        </div>
    )
  }
}


SectionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default SectionButton