import React from 'react'
import * as S from './styles'

const WorkoutProgress = () => {
  const testData = [
    {
      id: 1,
      workout: 'Наклон вперед (10 повторений)',
      progress: 45,
      'border-bar': '#565EEF',
      'bgc-bar': '#EDECFF',
    },
    {
      id: 2,
      workout: 'Наклон назад (10 повторений)',
      progress: 45,
      'border-bar': '#FF6D00',
      'bgc-bar': '#FFF2E0',
    },
    {
      id: 3,
      workout: 'Поднятие ног, согнутых в коленях (5 повторений)',
      progress: 45,
      'border-bar': '#9A48F1',
      'bgc-bar': '#F9EBFF',
    },
  ]
  return (
    <S.ProgressWrapper>
      <h3>Мой прогресс по тренировке 2:</h3>
      <S.ProgressList>
        {testData?.map((data) => (
          <S.ProgressListItem key={data.id}>
            {data.workout}
            <S.ProgressBar
              borderColor={data['border-bar']}
              bgc={data['bgc-bar']}
            >
              <S.ProgressNumber>{data.progress}</S.ProgressNumber>
            </S.ProgressBar>
          </S.ProgressListItem>
        ))}
      </S.ProgressList>
    </S.ProgressWrapper>
  )
}

export default WorkoutProgress
