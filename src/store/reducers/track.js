import { SET_CRNT_TRACK } from '../actions/types/track'

const initialState = {}

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CRNT_TRACK: {
      const { track } = action.payload

      return {
        ...state,
        ...track,
      }
    }

    default:
      return state
  }
}
