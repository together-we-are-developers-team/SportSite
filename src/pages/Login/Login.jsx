import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, child, get } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledLogin } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'
import { useAuth } from '../../hooks/use-auth'
import { setUser, getProgress } from '../../store/slices/userSlices'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState('')

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()

  const onLogin = () => {
    const auth = getAuth()

    signInWithEmailAndPassword(auth, values.login, values.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            password: values.password,
          })
        )
        const dbRef = ref(getDatabase())

        get(child(dbRef, `progress/3yRjRDMK7SRZVtrLlB18LbeWuSJ2/`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val()

              dispatch(
                getProgress({
                  progress: data,
                })
              )
            } else {
              console.log('No data available')
            }
          })
          .catch((error) => {
            console.error(error)
          })
        setSubmitSuccessMSG('Вход выполнен успешно.')
        setTimeout(() => navigate('/'), 1000)
        resetForm()
      })
      .catch(() => setSubmitSuccessMSG('Такого пользователя не существует'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitSuccessMSG('')
    onLogin()
  }

  return (
    <StyledLogin>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        submitSuccessMSG={submitSuccessMSG}
      />
    </StyledLogin>
  )
}

export default Login
