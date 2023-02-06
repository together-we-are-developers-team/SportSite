import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import UserAccount from '../UserAccount/UserAccount'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

const Header = ({ $isBlackText }) => {
  const navigate = useNavigate()
  const userLogged = false

  return (
    <StyledHeader>
      <Logo $isBlackText={$isBlackText} />
      {userLogged && (
        <Fragment>
          <UserAccount $isBlackText={$isBlackText} />
        </Fragment>
      )}
      {!userLogged && (
        <Fragment>
          <Link to="/signin" title="Войти.">
            <Button
              buttonName="Войти"
              isHeaderButton={true}
              onClick={() => navigate('/signin')}
            />
          </Link>
        </Fragment>
      )}
    </StyledHeader>
  )
}

export default Header
