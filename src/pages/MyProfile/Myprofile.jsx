import React, { useState } from 'react'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import Card from '../../components/Card/Card'

function MyProfile() {
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)

  return (
    <S.MyprofileBlock>
      <S.MyprofileUserInfo>

        <S.Title>Мой профиль</S.Title>
        <S.Paragraph>Логин: sergey.petrov96</S.Paragraph>
        <S.Paragraph>Пароль: 4fkhdj880d</S.Paragraph>

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
        <S.MyprofileCards>
          <Card titleCard="Йога" back="card-yoga"/>
          <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>
        </S.MyprofileCards>

        <S.MyprofileCards>
          <Card titleCard="Стретчинг" back="card-strench"/>
          <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>
        </S.MyprofileCards>

        <S.MyprofileCards>
          <Card titleCard="Бодифлекс" back="card-body"/>
          <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>
        </S.MyprofileCards>
      </S.MyProfileCardsBlock>
      
      <ModalPassword active={modalActive} setActive={setModalActive} />
      <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
    </S.MyprofileBlock>
  )
}

export default MyProfile
