import React from 'react'
import * as S from './styles'

const Exercises = ({ visible, setVisible }) => {
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

      <button type="button" onClick={() => setVisible(!visible)}>
        Заполнить свой прогресс
      </button>
    </div>
  )
}

export default Exercises
