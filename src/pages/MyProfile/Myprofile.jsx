import React, { useState } from 'react'
import * as S from './styles'
import Logo from '../../components/Logo/Logo'
import UserAccount from '../../components/UserAccount/UserAccount'
import Card from '../../components/Card/Card'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import SelectWorkout from '../../components/SelectWorkout/SelectWorkout'
import mainButton from '../../components/Button/Button'

const MyProfile = () => {
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)

  return (
    <S.Myprofile>
      <S.MyprofileHeader>
        <Logo $isBlackText={true} />
        <UserAccount />
      </S.MyprofileHeader>

      <>
        <S.MyprofileBlock>
          <h2>Мой профиль</h2>

          <p>Логин: sergey.petrov96</p>
          <p>Пароль: 4fkhdj880d</p>

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
          <Card titleCard={'Йога'} back={'card-yoga'} />
          <mainButton></mainButton>
          <Card titleCard={'Стретчинг'} back={'card-strench'} />
          <Card titleCard={'Бодифлекс'} back={'card-body'} />
        </S.MyprofileCards>

        <ModalPassword active={modalActive} setActive={setModalActive} />
        <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
      </>
    </S.Myprofile>
  )
}

export default MyProfile
