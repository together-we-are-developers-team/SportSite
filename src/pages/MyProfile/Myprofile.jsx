import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
// У тебя есть уже компонент <Card> не надо копировать и помещать к себе в страницу, см. src\components\Main\Main.jsx 25 строка, описал как лучше сделать
import Cards from './Cards'
import { useAuth } from '../../hooks/use-auth'
import {
  updateUserEmail,
  updateUserPassword,
} from '../../store/slices/userSlices'

function MyProfile() {
  const navigate = useNavigate()
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)
  /// /////////////////////////////////////////////////////////////////функции для правки логина/пароля//////////////////////////////////
  const dispatch = useDispatch()
  const auth = getAuth()
  const { email, password, progress } = useAuth()
  /* const newPassword = '87654321'
const newEmail = '123@Mail.ru' */
  const changeEmail = (newEmail) => {
    setModalLoginActive(true)
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        dispatch(
          updateUserEmail({
            email: newEmail,
          })
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const changePassword = (newPassword) => {
    setModalActive(true)
    const user = auth.currentUser
    updatePassword(user, newPassword)
      .then(() => {
        dispatch(
          updateUserPassword({
            password: newPassword,
          })
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const day = 'd1'

  return (
    <S.Myprofile>
      <S.MyprofileBlock>
        <h2>Мой профиль</h2>

        <p>Логин: {email}</p>
        <p>Пароль: {password}</p>

        <S.Buttons>
          <S.Button onClick={() => setModalLoginActive(true)}>
            Редактировать логин
          </S.Button>

          <S.Button onClick={() => setModalActive(true)}>
            Редактировать пароль
          </S.Button>
        </S.Buttons>
      </S.MyprofileBlock>

      <h2>Мои курсы</h2>

      <S.MyprofileCards>
        {progress.courses.map((item) => (
          <Cards
            key={item.id}
            titleCard={item.nameRu}
            back="cart-yoga"
            onClick={() => navigate(`/myprofile/courses/${item.id}${day}`)}
          />
        ))}
      </S.MyprofileCards>

      <ModalPassword
        active={modalActive}
        setActive={setModalActive}
        changePassword={changePassword}
      />
      <ModalLogin
        active={modalLoginActive}
        setActive={setModalLoginActive}
        changeEmail={changeEmail}
      />
    </S.Myprofile>
  )
}

export default MyProfile
