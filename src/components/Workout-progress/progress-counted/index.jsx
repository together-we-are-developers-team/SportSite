import React from 'react'
import progressCountedImg from '../../../assests/static/progress-counted.png'
import * as S from './styles'

const ProgressCounted = () => {
  return (
    <S.ProgressCountedWrapper>
      <S.ProgressCountedTitle>Ваш прогресс засчитан!</S.ProgressCountedTitle>
      <S.ProgressCountedImg src={progressCountedImg}></S.ProgressCountedImg>
    </S.ProgressCountedWrapper>
  )
}

export default ProgressCounted
