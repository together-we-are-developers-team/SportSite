import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { StyledMain } from './styles'

const MainPage = () => {
  return (
    <StyledMain>
      <Header $isBlackText={false} />
      <Main />
    </StyledMain>
  )
}

export default MainPage
