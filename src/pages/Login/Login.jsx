import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledLogin } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'

function Login() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()

  const handleSubmit = (event) => {
    event.preventDefault()
    // onLogin(values);
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
      />
    </StyledLogin>
  )
}

export default Login
