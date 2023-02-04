import { GET_TOKEN, REFRESH_TOKEN } from '../actions/types/token'

const initialState = {}

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN: {
      const { token } = action.payload

      return {
        ...state,
        ...token,
      }
    }

    case REFRESH_TOKEN: {
      const { token } = action.payload

      return {
        ...state,
        ...token,
      }
    }

    default:
      return state
  }
}
