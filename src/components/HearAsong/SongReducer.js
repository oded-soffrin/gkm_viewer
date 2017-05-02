
import {GOT_ALBUMS} from './SongConsts'

class Albums {
  constructor(albumsDto) {
    this.dto = albumsDto
  }

  items () {
    return this.dto.items || [];
  }


  toString() {
    //console.log(this.dto)
    const items = this.items();
    let retStr = items.length + ' albums: '
    items.forEach( (item) => {
      //console.log(item);
      retStr += '\n' +item.name;
    } )
    return retStr;
  }
}


const SongReducer = (state = {albums: []}, action) => {
  switch (action.type) {
    case GOT_ALBUMS:

      console.log('Got ', new Albums(action.albums).toString());
      return {
          ...state,
        albums: new Albums(action.albums).items()
      };
    default:
      return state;
  }
}

export default SongReducer;



