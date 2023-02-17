import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import Card from '../../components/Card/Card'
import { useAuth } from '../../hooks/use-auth'
import {
  updateUserEmail,
  updateUserPassword,
} from '../../store/slices/userSlices'

function MyProfile() {
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
    <S.MyprofileBlock>
      <S.MyprofileUserInfo>
        <S.Title>Мой профиль</S.Title>

        <S.Paragraph>Логин: {email}</S.Paragraph>
        <S.Paragraph>Пароль: {password}</S.Paragraph>

        <S.MyprofileUserChangeButtons>
          <S.Button onClick={() => setModalLoginActive(true)}>
            Редактировать логин
          </S.Button>

          <S.Button onClick={() => setModalActive(true)}>
            Редактировать пароль
          </S.Button>
        </S.MyprofileUserChangeButtons>
      </S.MyprofileUserInfo>

      <S.Subtitle>Мои курсы</S.Subtitle>

      <S.MyprofileCards>
        {progress.courses.map((item) => (
          <Link to={`/myprofile/courses/${item.id}${day}`}>
            <Card key={item.id} titleCard={item.nameRu} back="cart-yoga" />
          </Link>
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
    </S.MyprofileBlock>
  )
}

export default MyProfile
