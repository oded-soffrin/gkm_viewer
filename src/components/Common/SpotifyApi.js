import axios from "axios";

class SpotifyApi {

  searchAlbum(query) {
    return axios
        .get('https://api.spotify.com/v1/search', {
          params: {
            type: 'album',
            q: query
          }
        })
        .then(res => {
          const {albums} = res.data;
          return albums;
        })
        .catch(e => {
          console.error('Spotify.searchAlbum', e);
        })
  }

  fetchAlbum(albumId) {
    return axios
        .get('https://api.spotify.com/v1/albums/' + albumId)
        .then(res => {
          return res.data;
        })
        .catch(e => {
          console.error('Spotify.fetchAlbum', e);
        })

  }

  fetchTracks(albumId) {
    return this.fetchAlbum(albumId)
        .then(album => {
          return album.tracks;
        })
        .catch(e => {
          console.error('Spotify.fetchTracks', e);
        })
  }

  playFirstTrack(albumId) {
    this.fetchTracks(albumId)
        .then(tracks => {
          if (this.currentAudio) {
            this.currentAudio.pause();
          }
          this.currentAudio = new Audio(tracks.items[0].preview_url)
          this.currentAudio.play();
        })
  }
}

export default new SpotifyApi();