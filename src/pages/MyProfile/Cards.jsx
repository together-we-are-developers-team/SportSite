import { click } from '@testing-library/user-event/dist/click'
import { React } from 'react'
import * as S from './styles'

function Cards({ titleCard, back, onClick }) {
  return (
    <S.Card $IsBack={back} onClick={onClick}>
      <S.CardTitle>{titleCard}</S.CardTitle>
      <S.greenButton> Перейти →</S.greenButton>
    </S.Card>
  )
}

export default Cards
