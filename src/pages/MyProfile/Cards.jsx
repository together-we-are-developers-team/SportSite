import { React } from 'react'
import * as S from './styles'

function Cards({ titleCard, back }) {
  return (
    <S.Card
      $IsBack={back}
      onClick={() => {
        console.log('click')
      }}
    >
      <S.CardTitle>{titleCard}</S.CardTitle>
      <S.greenButton> Перейти →</S.greenButton>
    </S.Card>
  )
}

export default Cards
