import React from 'react';
import { connect } from 'react-redux'
import {searchSong} from './SongActions'
import Input from '../Common/Input.js'
import Spotify from '../Common/SpotifyApi'

const SongApp = ({searchSong, albums}) => {

  //console.log('got', albums);

  const onAlbumClick = (albumId) => (Spotify.playFirstTrack(albumId))


  const albumsHtml = albums.map( album => (
      <img onClick={() => onAlbumClick(album.id)} src={album.images[0].url} width="500" height="500" />
  ))

  return (
      <div>
        <h1>Song App</h1>
        <Input id='query' title="Here's a song I like" delayTime={1000} onUpdate={(a,b) => {searchSong(b)} } />

        {albumsHtml}
      </div>
  );
};


const mapStateToProps = (state) => ({
  albums: state.songApp.albums
})

const songAppConnected = connect(
    mapStateToProps,
    { searchSong  }
)(SongApp)



export default songAppConnected;
