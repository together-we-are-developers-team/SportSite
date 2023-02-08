import React from 'react'
import * as S from './styles'

const SelectWorkout = () => {
  return (
    <S.PopupAreaMenu>
      <h1>Выберите тренировку</h1>

      <S.TrainingBtnSuccess>
        <S.BtnContent>
          <S.BtnTitle>Утренняя практика</S.BtnTitle>

          <S.BtnSubtitle>Йога на каждый день / 1 день</S.BtnSubtitle>
        </S.BtnContent>
      </S.TrainingBtnSuccess>

      <S.TrainingBtnSuccess>
        <S.BtnContent>
          <S.BtnTitle>Красота и здоровье</S.BtnTitle>

          <S.BtnSubtitle>Йога на каждый день / 2 день</S.BtnSubtitle>
        </S.BtnContent>
      </S.TrainingBtnSuccess>

      <S.TrainingBtn>
        <S.TrainingBtn>
          <S.BtnContent>
            <S.BtnTitle>Асаны стоя</S.BtnTitle>

            <S.BtnSubtitle>Йога на каждый день / 3 день</S.BtnSubtitle>
          </S.BtnContent>
        </S.TrainingBtn>
      </S.TrainingBtn>

      <S.TrainingBtn>
        <S.TrainingBtn>
          <S.BtnContent>
            <S.BtnTitle>Растягиваем мышцы бедра</S.BtnTitle>

            <S.BtnSubtitle>Йога на каждый день / 4 день</S.BtnSubtitle>
          </S.BtnContent>
        </S.TrainingBtn>
      </S.TrainingBtn>

      <S.TrainingBtn>
        <S.TrainingBtn>
          <S.BtnContent>
            <S.BtnTitle>Гибкость спины</S.BtnTitle>

            <S.BtnSubtitle>Йога на каждый день / 5 день</S.BtnSubtitle>
          </S.BtnContent>
        </S.TrainingBtn>
      </S.TrainingBtn>
    </S.PopupAreaMenu>
  )
}

export default SelectWorkout
