import { React } from 'react'
import * as S from './styles'

function Card({ titleCard, back, onClick }) {
  return (
    <S.Card $IsBack={back} onClick={onClick}>
      <S.CardTitle>{titleCard}</S.CardTitle>
    </S.Card>
  )
}

export default Card
