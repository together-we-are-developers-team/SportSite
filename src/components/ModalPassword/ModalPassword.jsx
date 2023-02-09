import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'

const ChangePassword = ({ active, setActive }) => {
  const [valuePassword, setValuePassword] = useState('')

  const onInputChangePassword = (evt) => {
    setValuePassword(evt.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
  }

  if (!active) {
    return null
  }

  return (
    <S.PopupArea onClick={() => setActive(false)}>
      <S.AuthForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <Logo $isBlackText={'black'} />
        <p>Новый пароль:</p>
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
        {
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
        }
        {<S.FormButton onClick={onInputChangePassword}>Сохранить</S.FormButton>}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default ChangePassword
