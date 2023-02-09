import React from 'react'
import * as S from './styles'
import TrainingBtn from './TrainingBtn'

const SelectWorkout = () => {
  return (
    <S.PopupAreaMenu>
      <S.Title>Выберите тренировку</S.Title>

      <TrainingBtn
        title={'Утренняя практика'}
        subTitle={'Йога на каждый день / 1 день'}
      />
      <TrainingBtn
        title={'Красота и здоровье'}
        subTitle={'Йога на каждый день / 2 день'}
      />
      <TrainingBtn
        title={'Асаны стоя'}
        subTitle={'Йога на каждый день / 3 день'}
      />
      <TrainingBtn
        title={'Растягиваем мышцы бедра'}
        subTitle={'Йога на каждый день / 4 день'}
      />
      <TrainingBtn
        title={'Гибкость спины'}
        subTitle={'Йога на каждый день / 5 день'}
      />
    </S.PopupAreaMenu>
  )
}

export default SelectWorkout
