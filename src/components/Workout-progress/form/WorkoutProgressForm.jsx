import React, { useRef } from 'react'
import * as S from './styles'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Button from '../../Button/Button'

const WorkoutProgressForm = ({ setVisible }) => {
  const formRef = useRef()
  useOnClickOutside(formRef, () => setVisible(false))

  return (
    <S.FormWrapper ref={formRef}>
      <h2>Мой прогресс</h2>
      <S.ProgressForm>
        <label>
          Сколько раз вы сделали наклоны вперед?
          <S.FormInput type="number" placeholder="Введите значение" />
        </label>
        <label>
          Сколько раз вы сделали наклоны назад?
          <S.FormInput type="number" placeholder="Введите значение" />
        </label>
        <label>
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
          <S.FormInput type="number" placeholder="Введите значение" />
        </label>
        <Button buttonName="Отправить" type="submit" />
      </S.ProgressForm>
    </S.FormWrapper>
  )
}

export default WorkoutProgressForm
