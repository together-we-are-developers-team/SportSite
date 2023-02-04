import { GET_USER } from '../types/user'

export const getUser = (user) => ({
  type: GET_USER,
  payload: {
    user,
  },
})
