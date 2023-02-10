import React from 'react'
import SaleStiker from '../SaleStiker/SaleStiker'
import Card from '../Card/Card'
import * as S from './styles'
import Button from '../Button/Button'

function Main() {
  const UpWindow = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <S.Main>
        <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
        <S.MainTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.MainTitle>
        <SaleStiker />
        <S.MainCards>
          <Card titleCard="Йога" back="card-yoga" />
          <Card titleCard="Стретчинг" back="card-strench" />
          <Card titleCard="Танцевальный фитнес" back="card-dance" />
          <Card titleCard="Степ-аэробика" back="card-step" />
          <Card titleCard="Бодифлекс" back="card-body" />{' '}
        </S.MainCards>
        <Button callback={UpWindow} isGreen buttonName="Наверх 🠕" />
      </S.Main>
    </div>
  )
}

export default Main
