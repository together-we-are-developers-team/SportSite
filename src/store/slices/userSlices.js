/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.password = action.payload.password
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      state.password = null
    },
    updateUserEmail(state, action) {
      const { email } = action.payload
      state, (state.email = email)
    },
    updateUserPassword(state, action) {
      const { password } = action.payload
      state, (state.password = password)
    },
    getProgress(state, action) {
      const { progress } = action.payload
      state, (state.progress = progress)
    },
  },
})

export const {
  setUser,
  removeUser,
  updateUserEmail,
  updateUserPassword,
  getProgress,
} = userSlice.actions

export default userSlice.reducer
