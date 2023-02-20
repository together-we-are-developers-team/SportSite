import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import UserAccount from '../UserAccount/UserAccount'
import Button from '../Button/Button'
import { useAuth } from '../../hooks/use-auth'

// для разлогинивания функция и импорт //import{removeUser} from '../../store/slices/userSlices' onClick={()=>dispatch(removeUser())}

function Header({ location }) {
  const navigate = useNavigate()
  const { isAuth, email } = useAuth()

  return (
    <StyledHeader>
      <Logo location={location} />
      {isAuth && (
        // Просто сделал линк на админку
        <Link to="/myprofile">
          <UserAccount location={location} login={email} />
        </Link>
      )}
      {!isAuth && (
        <Link to="/signin" title="Войти.">
          <Button
            isHeaderButton
            isVisible
            buttonName="Войти"
            onClick={() => navigate('/signin')}
          />
        </Link>
      )}
    </StyledHeader>
  )
}

export default Header
