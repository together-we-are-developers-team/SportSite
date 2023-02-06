import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'
import Button from '../Button/Button'

const AuthForm = () => {
  const navigate = useNavigate()

  const [valueName, setValueName] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const onInputChange = (evt) => {
    setValueName(evt.target.value)
  }
  const onInputChangePassword = (evt) => {
    setValuePassword(evt.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
  }
  const handleLogin = (event) => {
    event.preventDefault()

    setValueName('')
    setValuePassword('')
  }
  const handleRegister = () => {
    navigate('/signin')
  }
  const { pathname } = useLocation()

  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit}>
        <Logo $isBlackText={'black'} />
        <S.FormInputFirst
          type="text"
          name="login"
          placeholder="Логин"
          value={valueName}
          onChange={onInputChange}
          required
        />
        <S.FormSpan id="login-error" />
        <S.FormInput
          type="password"
          name="password"
          id="password"
          value={valuePassword}
          onChange={onInputChangePassword}
          placeholder="Пароль"
          minLength="8"
          required
        />
        <S.FormSpan id="password-error" />
        {pathname !== '/signin' && (
          <Fragment>
            <S.FormInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
              minLength="8"
              value={valuePassword}
              onChange={onInputChangePassword}
              required
            />
            <S.FormSpan id="password-error" />
          </Fragment>
        )}
        {pathname === '/signin' && (
          <Button
            callback={handleLogin}
            buttonName="Войти"
            isPurple={true}
            isLarge={true}
          />
        )}
        {pathname === '/signup' && (
          <Button
            callback={handleRegister}
            buttonName="Зарегистрироваться"
            isPurple={false}
            isLarge={true}
          />
        )}
        {pathname === '/signin' && (
          <Fragment>
            <Link to="/signup" title="Перейти к регистрации.">
              <Button
                buttonName="Зарегистрироваться"
                isPurple={false}
                isLarge={true}
                onClick={() => navigate('/signin')}
              />
            </Link>
          </Fragment>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
