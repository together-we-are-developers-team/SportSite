import React from 'react'
import logoWhite from '../../images/logo-white-text.png'
import logoBlack from '../../images/logo-black-text.png'
import { LogoStyled } from './styles'

const Logo = ({ $isBlackText }) => {
  return <LogoStyled src={$isBlackText ? logoBlack : logoWhite} alt="Логотип" />
}

export default Logo
