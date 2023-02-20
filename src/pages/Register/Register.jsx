import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledRegister } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'
import { setUser } from '../../store/slices/userSlices'
import { useAuth } from '../../hooks/use-auth'
import { progressDummy } from '../../utils/progressDummy'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState('')

  function createUserProgress(user) {
    const db = getDatabase()

    set(ref(db, `/progress/${user.uid}`), progressDummy)
  }

  const onRegister = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, values.login, values.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            password: values.password,
          })
        )
        return user
      })
      .then((user) => {
        createUserProgress(user)
      })
      .catch(setSubmitSuccessMSG('Такой пользователь уже существует'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitSuccessMSG('')
    if (
      values.password === values.repeat_password &&
      values.password &&
      values.repeat_password
    ) {
      onRegister()
      setTimeout(() => navigate('/signin'), 1000)
    } else if (values.password !== values.repeat_password) {
      setSubmitSuccessMSG('Пароли не совпадают')
    }
  }

  return (
    <StyledRegister>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        submitSuccessMSG={submitSuccessMSG}
      />
    </StyledRegister>
  )
}

export default Register
