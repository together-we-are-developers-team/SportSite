/* eslint-disable react/no-array-index-key */
import React from 'react'
import * as S from './styles'
import Button from '../Button/Button'

function Exercises({ visible, setVisible }) {
  const testData = [
    'Наклон вперед (10 повторений)',
    'Наклон назад (10 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
  ]

  return (
    <div>
      <h3>Упражнения</h3>
      <S.ExercisesList>
        {testData?.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </S.ExercisesList>

      <Button
        type="button"
        buttonName="Заполнить свой прогресс"
        callback={() => setVisible(!visible)}
      />
    </div>
  )
}

export default Exercises
