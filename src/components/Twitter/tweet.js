import React, {PropTypes} from 'react';

class Tweet extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let t = this.props.data.tweet;

    /*
     <pre>{JSON.stringify(t, null, 2) }</pre>

     */
    return (<div className="tweet">

      <a href={"https://twitter.com/anakiarra_/status/"+ t.id_str} target="_blank">
        <img height="100" src={t.user.profile_image_url.replace('_normal', '')}/>
        <div className="userName">{t.user.name} / {t.user.screen_name} </div></a>
      <div>{t.text}</div>
    </div>);
  }

}

Tweet.propTypes = {
  data: PropTypes.object.isRequired
};

export default Tweet;