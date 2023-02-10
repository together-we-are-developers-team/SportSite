import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import MainPage from './pages/Main/Main'
import NotFound from './pages/404/NotFound'
import MyProfile from './pages/MyProfile/Myprofile'
import AboutCourse from './pages/About-course'
import UserWorkout from './pages/User-workout'
import { ProtectedRoute } from './components/protected-route/protected-route'
import { useLoginMutation } from './services/login'

export function AppRoutes({ isLoading }) {
  const [user, setUser] = React.useState(true)
  const { data } = useLoginMutation()
  if (data) {
    setUser(data)
    console.log(user)
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path="/" element={<MainPage isLoading={isLoading} />} />
        <Route path="/courses/:id" element={<AboutCourse />} />
        <Route
          path="/myprofile"
          element={<MyProfile isLoading={isLoading} />}
        />
        <Route path="/myprofile/courses/:id" element={<UserWorkout />} />
      </Route>

      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
