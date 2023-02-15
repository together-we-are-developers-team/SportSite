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

function Register() {
  const dispatch = useDispatch()
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState('')
  const navigate = useNavigate()
  const { isAuth, id, email } = useAuth()
  function createUserProgress() {
    const db = getDatabase()

    set(ref(db, `/progress/3yRjRDMK7SRZVtrLlB18LbeWuSJ2`), {
      workouts: {
        yoga01: {
          target: 20,
          user: 0,
        },
        yoga02: {
          target: 10,
          user: 0,
        },
        yoga03: {
          target: 20,
          user: 0,
        },
        yoga04: {
          target: 10,
          user: 0,
        },
        yoga05: {
          target: 20,
          user: 0,
        },
        yoga06: {
          target: 10,
          user: 0,
        },
      },
      courses: [
        {
          id: 'c01',
          nameEng: 'Yoga',
          nameRu: 'Йога',
          workouts: ['a01', 'a02', 'a03', 'a04', 'a05'],
        },
        {
          id: 'c02',
          nameEng: 'Stretch',
          nameRu: 'Стретчинг',
          workouts: ['a01', 'a02', 'a03', 'a04', 'a05'],
        },
        {
          id: 'c03',
          nameEng: 'Dance',
          nameRu: 'Танцевальный фитнес',
          workouts: ['a01', 'a02', 'a03', 'a04', 'a05'],
        },
      ],
    })
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
        createUserProgress()

        setSubmitSuccessMSG(
          'Пользователь зарегистрирован, осуществяется переход на страницу входа'
        )
        setTimeout(() => navigate('/signin'), 500)
        resetForm()
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
