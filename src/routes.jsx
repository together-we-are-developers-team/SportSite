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
import { useAuth } from './hooks/use-auth'

export function AppRoutes({ isLoading }) {
  const { isAuth } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<MainPage isLoading={isLoading} />} />
      <Route path="/courses/:id" element={<AboutCourse />} />

      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
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
