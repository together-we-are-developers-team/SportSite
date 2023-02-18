import { React } from 'react'
import * as S from './styles'

function Card({ titleCard, cardImage, isForwardBtn, onSelectWorkout }) {
  return (
    <S.Card cardImage={cardImage} onClick={onSelectWorkout}>
      <S.CardTitle>{titleCard}</S.CardTitle>

      {isForwardBtn && <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>}
    </S.Card>
  )
}

export default Card
