import * as types from '../constants/actionTypes'

let initialState = {
  stats: {}
}


const InstaReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.IG_GOT_STATS:
      return {
        stats: action.data.stats
      }

    default:
      return state
  }
}

export default InstaReducer
