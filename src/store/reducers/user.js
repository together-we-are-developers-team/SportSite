import { GET_USER } from '../actions/types/user'

const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      const { user } = action.payload

      return {
        ...state,
        ...user,
      }
    }

    default:
      return state
  }
}
