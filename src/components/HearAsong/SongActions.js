import {GOT_ALBUMS} from './SongConsts'
import Spotify from '../Common/SpotifyApi'


const gotAlbumsAction = (albums) => ({type: GOT_ALBUMS, albums})

export const searchSong = (query) => (dispatch) => {

  Spotify.searchAlbum(query).then(albumsDto => {

    dispatch(gotAlbumsAction(albumsDto));
  });
}