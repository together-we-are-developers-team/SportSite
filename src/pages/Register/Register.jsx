import AuthForm from '../../components/AuthForm/AuthForm'
import React, { useState } from 'react'
import { StyledRegister } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()
    const [mathPasswordsError, setMathPassordsError] = useState('');
    const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.password === values.repeat_password && values.password && values.repeat_password) {
      //onRegister(values);
      console.log(values)
      resetForm()
      navigate('/signin')
     
    }
    setMathPassordsError('Пароли не совпадают')
    return
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
      ></AuthForm>
    </StyledRegister>
  )
}

export default Register
