import React, { Fragment } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
      {isAuth && <UserAccount location={location} login={email} />}
      {!isAuth && (
        <Link to="/signin" title="Войти.">
          <Button isHeaderButton isVisible onClick={() => navigate('/signin')}>
            Войти
          </Button>
        </Link>
      )}
    </StyledHeader>
  )
}

export default Header
