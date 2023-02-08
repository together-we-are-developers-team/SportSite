import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'

const AuthForm = ({values, onSubmit, onChange, errors, isValid, mathPasswordsError}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  
  
  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit} noValidate>
        <Logo $isBlackText={'black'} />
        <S.FormInputFirst
          type="text"
          name="login"
          placeholder="Логин"
          value={values.login || ""}
          minLength='2'
          onChange={onChange}
          required
        />
        <S.FormSpan $isValid={isValid}>{errors.login}</S.FormSpan>
        <S.FormInput
          type="password"
          name="password"
          value={values.password || ""}
          onChange={onChange}
          placeholder="Пароль"
          minLength="8"
          required
        />
        <S.FormSpan $isValid={isValid}>{errors.password }</S.FormSpan>
        {pathname !== '/signin' && (
          <Fragment>
            <S.FormInput
              type="password"
              name="repeat_password"
              placeholder="Повторите пароль"
              minLength="8"
              value={values.repeat_password || ""}
              onChange={onChange}
              required
            />
            <S.FormSpan $isValid={isValid}>{errors.repeat_password}</S.FormSpan>
          </Fragment>
        )}
       
       <S.FormSpanSubmit $isValid={isValid}>{mathPasswordsError}</S.FormSpanSubmit>
          <S.FormButton type="submit"  disabled={!isValid}>{pathname === '/signin' ? "Войти" : 'Зарегистрироваться'}</S.FormButton>
      
        
        {pathname === '/signin' && (
          <Fragment>
            
          <S.FormButtonRegister type="button" title="Перейти к регистрации." onClick={() => navigate('/signup')}>Зарегистрироваться</S.FormButtonRegister>
           
          </Fragment>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
