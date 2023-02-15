import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledRegister } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'

function Register() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()
  const [mathPasswordsError, setMathPassordsError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      values.password === values.repeat_password &&
      values.password &&
      values.repeat_password
    ) {
      // onRegister(values);
      resetForm()
      navigate('/signin')
    }
    setMathPassordsError('Пароли не совпадают')
  }

  return (
    <StyledRegister>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        mathPasswordsError={mathPasswordsError}
      />
    </StyledRegister>
  )
}

export default Register
