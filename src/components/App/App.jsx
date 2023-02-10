import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import * as S from './styles'
import { GlobalStyle } from './global-styles'

function App() {
  const { pathname } = useLocation()

  return (
    <S.AppWrapper>
      <GlobalStyle location={pathname} />
      <AppRoutes />
    </S.AppWrapper>
  )
}

export default App
