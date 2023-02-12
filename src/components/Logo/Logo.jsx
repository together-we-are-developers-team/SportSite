import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../assests/static/logo/logo-white-text.png'
import logoBlack from '../../assests/static/logo/logo-black-text.png'
import { LogoStyled } from './styles'

function Logo({ location }) {
  return (
    <Link to="/">
      <LogoStyled
        src={location !== '/' ? logoBlack : logoWhite}
        alt="Логотип"
      />
    </Link>
  )
}

export default Logo
