import React from 'react'
import * as S from './styles'

function WorkoutProgress() {
  const testData = [
    {
      id: 1,
      workout: 'Наклон вперед',
      progress: 45,
      'border-bar': '#565EEF',
      'bgc-bar': '#EDECFF',
    },
    {
      id: 2,
      workout: 'Наклон назад',
      progress: 45,
      'border-bar': '#FF6D00',
      'bgc-bar': '#FFF2E0',
    },
    {
      id: 3,
      workout: 'Поднятие ног, согнутых в коленях',
      progress: 45,
      'border-bar': '#9A48F1',
      'bgc-bar': '#F9EBFF',
    },
  ]
  return (
    <S.ProgressWrapper>
      <S.ProgressTitle>Мой прогресс по тренировке 2:</S.ProgressTitle>
      <S.ProgressList>
        {testData?.map((data) => (
          <S.ProgressListItem key={data.id}>
            <p>{data.workout}</p>

            <S.ProgressBar
              borderColor={data['border-bar']}
              bgc={data['bgc-bar']}
            >
              <S.ProgressBarInner
                width={data.progress}
                bgc={data['border-bar']}
              >
                <S.ProgressNumber>{`${data.progress}%`}</S.ProgressNumber>
              </S.ProgressBarInner>
            </S.ProgressBar>
          </S.ProgressListItem>
        ))}
      </S.ProgressList>
    </S.ProgressWrapper>
  )
}

export default WorkoutProgress
