import { GET_TOKEN, REFRESH_TOKEN } from '../types/token'

export const getToken = (token) => ({
  type: GET_TOKEN,
  payload: {
    token,
  },
})
export const refreshToken = (token) => ({
  type: REFRESH_TOKEN,
  payload: {
    token,
  },
})
