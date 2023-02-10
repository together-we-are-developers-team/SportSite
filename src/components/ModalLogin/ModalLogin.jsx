import React, { useState } from 'react'
import Logo from '../Logo/Logo'

import * as S from './styles'

function ChangeLogin({ active, setActive }) {
  const [valueName, setValueName] = useState('')

  const onInputChange = (evt) => {
    setValueName(evt.target.value)
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
        <Logo $isBlackText="black" />
        <p>Новый логин:</p>
        <S.FormInputFirst
          type="text"
          name="login"
          placeholder="Логин"
          value={valueName}
          onChange={onInputChange}
          required
        />

        <S.FormButton onClick={onInputChange}>Сохранить</S.FormButton>
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default ChangeLogin
