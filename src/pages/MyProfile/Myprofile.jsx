import React, { useState } from 'react'
import * as S from './styles'
import ModalPassword from '../../components/ModalPassword/ModalPassword'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import Card from '../../components/Card/Card'
import cardDance from '../../components/Card/images/card-dance.png'
import cardStretch from '../../components/Card/images/card-strench.png'
import cardYoga from '../../components/Card/images/card-yoga.png'
import ModalTraining from '../../components/SelectWorkout/SelectWorkout'
import cardStep from '../../components/Card/images/card-step.png'
import cardBody from '../../components/Card/images/card-body.png'

function MyProfile() {
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)
  const [modalTrainingActive, setModalTrainingActive] = useState(false)

  const cardMockData = [
    {
      id: 1,
      title: 'Йога',
      image: cardYoga,
    },
    {
      id: 2,
      title: 'Стретчинг',
      image: cardStretch,
    },
    {
      id: 3,
      title: 'Танцевальный фитнес',
      image: cardDance,
    }
  ]

  const onSelectWorkout = () => {
    setModalTrainingActive(true)
  }

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

      <S.MyprofileCardsBlock>
        {cardMockData?.map((element) => (
          <Card
            titleCard={element.title}
            cardImage={element.image}
            key={element.id}
            isForwardBtn
            onSelectWorkout={onSelectWorkout}
          />
        ))}
      </S.MyprofileCardsBlock>

      <ModalTraining
        active={modalTrainingActive}
        setActive={setModalTrainingActive}
      />
      <ModalPassword active={modalActive} setActive={setModalActive} />
      <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
    </S.MyprofileBlock>
  )
}

export default MyProfile
