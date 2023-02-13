import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import UserAccount from '../UserAccount/UserAccount'
import Button from '../Button/Button'

function Header({ location }) {
  const navigate = useNavigate()
  const userLogged = false

  return (
    <StyledHeader>
      <Logo location={location} />
      {userLogged && <UserAccount location={location} />}
      {!userLogged && (
        <Link to="/signin" title="Войти.">
          <Button buttonName='Войти' isHeaderButton isVisible callback={() => navigate('/signin')}/>

        </Link>
      )}
    </StyledHeader>
  )
}

export default Header
