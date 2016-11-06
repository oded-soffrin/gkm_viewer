import React, {PropTypes} from 'react';
import $ from 'jquery';
import '../styles/gkm-home-page.css';


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

class GKMHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {latest_tweets: [], etsy_listings: []};

  }

  componentDidMount() {
    $.get('https://localhost:4567/valid_tweets', (valid_tweets) => {
      this.setState({
        latest_tweets: valid_tweets
      });
    });
  }


  render() {

    let tweets = [];
    for (let i = 0; i < this.state.latest_tweets.length; i++) {
      tweets.push(<Tweet data={this.state.latest_tweets[i]} />);
    }

    return (
        <div>
          <h2 className="alt-header">GKM</h2>
          <ul>
            <li>Use API - see latestTweets fetch result</li>
          </ul>
          <div>
            <h3>Valid tweets</h3>
            {tweets}

          </div>

        </div>
    );
  }
}

GKMHomePage.propTypes = {
  data: PropTypes.object.isRequired
};


export default GKMHomePage;
