import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledLogin } from './styles'
import React from 'react'
import useFormWithValidation from '../../utils/useFormWithValidation'

const Login = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()

  const handleSubmit = (event) => {
    event.preventDefault()
    //onLogin(values);
    console.log(values)
    resetForm()
  }

  return (
    <StyledLogin>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
      ></AuthForm>
    </StyledLogin>
  )
}

export default Login
