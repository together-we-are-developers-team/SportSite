import { React } from 'react'
import * as S from './styles'

function Card({ titleCard, cardImage }) {
  return (
    <S.Card
      cardImage={cardImage}
      onClick={() => {
        console.log('click')
      }}
    >
      <S.CardTitle>{titleCard}</S.CardTitle>
    </S.Card>
  )
}

export default Card
