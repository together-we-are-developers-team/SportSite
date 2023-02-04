import { Navigate } from 'react-router-dom'
import React from 'react'
export const ProtectedRoute = ({
  children,
  redirectPath = '/signin',
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return children
}
