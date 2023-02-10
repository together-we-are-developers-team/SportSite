import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import UserAccount from '../UserAccount/UserAccount'
import Button from '../Button/Button'

function Header({ $isBlackText }) {
  const navigate = useNavigate()
  const userLogged = false

  return (
    <StyledHeader>
      <Logo $isBlackText={$isBlackText} />
      {userLogged && <UserAccount $isBlackText={$isBlackText} />}
      {!userLogged && (
        <Link to="/signin" title="Войти.">
          <Button
            buttonName="Войти"
            isHeaderButton
            isVisible
            onClick={() => navigate('/signin')}
          />
        </Link>
      )}
    </StyledHeader>
  )
}

export default Header
