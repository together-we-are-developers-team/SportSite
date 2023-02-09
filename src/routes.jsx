import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import MainPage from './pages/Main/Main'
import NotFound from './pages/404/NotFound'
import MyProfile from "./pages/MyProfile/Myprofile"

import { ProtectedRoute } from './components/protected-route/protected-route'
import { useLoginMutation } from '../src/services/login'
import { StyledApp, StyledAppWhite } from './components/App/styles'

export const AppRoutes = ({ isLoading }) => {
  const [user, setUser] = React.useState(true)
  const { data } = useLoginMutation()
  if (data) {
    setUser(data)
    console.log(user)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={user}>
            <StyledApp>
              <MainPage isLoading={isLoading} />
            </StyledApp>
            
            {/* <MyProfile isLoading={isLoading} /> */}
          </ProtectedRoute>
        }
      ></Route>
            <Route
        path="/myprofile"
        element={
          <ProtectedRoute isAllowed={user}>
            <StyledAppWhite>
              <MyProfile isLoading={isLoading} />
            </StyledAppWhite>
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/signup" element={<Register />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
