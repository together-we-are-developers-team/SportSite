import { SET_CRNT_TRACK } from '../types/track'

export const setCurrentTrack = (track) => ({
  type: SET_CRNT_TRACK,
  payload: {
    track,
  },
})
