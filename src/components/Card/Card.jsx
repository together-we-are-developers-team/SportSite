import { React } from 'react'
import * as S from './styles'

function Card({ titleCard, back }) {
  return (
    <S.Card
      $IsBack={back}
      onClick={() => {
        console.log('click')
      }}
    >
      <S.CardTitle>{titleCard}</S.CardTitle>
    </S.Card>
  )
}

export default Card
