import React, { useState } from 'react'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import Card from '../../components/Card/Card'

function MyProfile() {
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)

  return (
    <S.Myprofile>
      <S.MyprofileBlock>

        <S.Title>Мой профиль</S.Title>
        <S.Paragraph>Логин: sergey.petrov96</S.Paragraph>
        <S.Paragraph>Пароль: 4fkhdj880d</S.Paragraph>

        <S.Buttons>
          <S.Button onClick={() => setModalLoginActive(true)}>
            Редактировать логин
          </S.Button>

          <S.Button onClick={() => setModalActive(true)}>
            Редактировать пароль
          </S.Button>
        </S.Buttons>
      </S.MyprofileBlock>

      <S.Subtitle>Мои курсы</S.Subtitle>
      
      <S.myProfileCardsBlock>
        <S.myprofileCards>
          <Card titleCard="Йога" back="card-yoga"/>
          <S.ForwardCardGraanBtn>Перейти →</S.ForwardCardGraanBtn>
        </S.myprofileCards>

        <S.myprofileCards>
          <Card titleCard="Стретчинг" back="card-strench"/>
          <S.ForwardCardGraanBtn>Перейти →</S.ForwardCardGraanBtn>
        </S.myprofileCards>

        <S.myprofileCards>
          <Card titleCard="Бодифлекс" back="card-body"/>
          <S.ForwardCardGraanBtn>Перейти →</S.ForwardCardGraanBtn>
        </S.myprofileCards>
      </S.myProfileCardsBlock>
      
      <ModalPassword active={modalActive} setActive={setModalActive} />
      <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
    </S.Myprofile>
  )
}

export default MyProfile
