import React, { useState, Fragment } from 'react'
import Logo from '../Logo/Logo'
import * as S from './styles'

function ChangePassword({ active, setActive, changePassword }) {
  // приходит функция изменения пароля changePassword, в нее уходят данные с инпута при сабмите формы
  const [valuePassword, setValuePassword] = useState('')

  const onInputChangePassword = (evt) => {
    setValuePassword(evt.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    changePassword(valuePassword)
  }

  if (!active) {
    return null
  }

  return (
    <S.PopupArea onClick={() => setActive(false)}>
      <S.AuthForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <Logo $isBlackText="black" />
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
        <>
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
        </>
        <S.FormButton type="submit">Сохранить</S.FormButton>
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default ChangePassword
