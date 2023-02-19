import { React } from 'react'
import * as S from './styles'

function Card({ titleCard, cardImage, isForwardBtn, onClick }) {
  return (
    <S.Card cardImage={cardImage} onClick={onClick}>
      <S.CardTitle>{titleCard}</S.CardTitle>

      {isForwardBtn && <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>}
    </S.Card>
  )
}

export default Card
