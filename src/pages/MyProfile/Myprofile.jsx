import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import {
  updateUserEmail,
  updateUserPassword,
} from '../../store/slices/userSlices'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import ModalTraining from '../../components/SelectWorkout/SelectWorkout'
import Card from '../../components/Card/Card'


function MyProfile() {
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)
  const [modalTrainingActive, setModalTrainingActive] = useState(false)

  const [currentCourseForCard, setCurrentCourseForCard] = useState('yoga')

  /// /////////////////////функции для правки логина/пароля//////////////////////////////////
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

  const onSelectWorkout = () => {
    setModalTrainingActive(true)
  }

  return (
    <S.MyprofileBlock>
      <S.MyprofileUserInfo>
        <S.Title>Мой профиль</S.Title>

        <S.Paragraph>Логин: {email} </S.Paragraph>
        <S.Paragraph>Пароль: {password} </S.Paragraph>

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

      <S.MyProfileCardsBlock>

         {progress.courses?.map((element) => (
          <Card
            key={element.id}
            titleCard={element.nameRu}
            cardImage={element.image}
            isForwardBtn
            onClick={() => {
              setCurrentCourseForCard(element.id)
              setModalTrainingActive(true)
            }}
          />
        ))}
      </S.MyProfileCardsBlock>

      <ModalTraining
        active={modalTrainingActive}
        setActive={setModalTrainingActive}
      />
      <ModalPassword active={modalActive} setActive={setModalActive} changePassword={changePassword}/>
      <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} changeEmail={changeEmail}/>
    </S.MyprofileBlock>
  )
}

export default MyProfile
