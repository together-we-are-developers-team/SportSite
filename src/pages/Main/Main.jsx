import React from 'react'
import SaleStiker from '../../components/SaleStiker/SaleStiker'
import Card from '../../components/Card/Card'
import * as S from './styles'
import Button from '../../components/Button/Button'
import cardBody from '../../components/Card/images/card-body.png'
import cardDance from '../../components/Card/images/card-dance.png'
import cardStep from '../../components/Card/images/card-step.png'
import cardStretch from '../../components/Card/images/card-strench.png'
import cardYoga from '../../components/Card/images/card-yoga.png'

function Main() {
  const UpWindow = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

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
    },
    {
      id: 4,
      title: 'Степ-аэробика',
      image: cardStep,
    },
    {
      id: 5,
      title: 'Бодифлекс',
      image: cardBody,
    },
  ]

  return (
    <S.Main>
      <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
      <S.MainTitle>
        Начните заниматься спортом и улучшите качество жизни
      </S.MainTitle>
      {/* <SaleStiker /> Если просто 1 фото, которое нигде не переиспользуется, лучше не делать отдельный компонент */}
      <SaleStiker />

      <S.MainCards>
        {cardMockData?.map((element) => (
          <Card
            titleCard={element.title}
            cardImage={element.image}
            key={element.id}
          />
        ))}
      </S.MainCards>
      <Button callback={UpWindow} isGreen buttonName="Наверх 🠕" />
    </S.Main>
  )
}

export default Main
