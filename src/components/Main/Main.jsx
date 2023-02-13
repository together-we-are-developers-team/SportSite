import React from 'react'
import SaleStiker from '../SaleStiker/SaleStiker'
import Card from '../Card/Card'
import * as S from './styles'
import Button from '../Button/Button'
import cardBody from '../Card/images/card-body.png'
import cardDance from '../Card/images/card-dance.png'
import cardStep from '../Card/images/card-step.png'
import cardStretch from '../Card/images/card-strench.png'
import cardYoga from '../Card/images/card-yoga.png'

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
    <div>
      <S.Main>
        <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
        <S.MainTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.MainTitle>
        {/* <SaleStiker /> Если просто 1 фото, которое нигде не переиспользуется, лучше не делать отдельный компонент */}
        <SaleStiker />

        <S.MainCards>
          {cardMockData
            ? cardMockData.map((element) => (
                <Card
                  titleCard={element.title}
                  cardImage={element.image}
                  key={element.id}
                />
              ))
            : null}
        </S.MainCards>
        <Button callback={UpWindow} isGreen buttonName="Наверх 🠕" />
      </S.Main>
    </div>
  )
}

export default Main
