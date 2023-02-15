/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'
import { getDatabase, ref, get, set, child } from 'firebase/database'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Button from '../../Button/Button'
import { setUser, getProgress } from '../../../store/slices/userSlices'

const WorkoutProgressForm = ({ setVisible, exercisesPopup }) => {
  const formRef = useRef()
  const dispatch = useDispatch()
  // инпуты
  const [value, setValue] = useState('')
  const [yoga03, setYoga03] = useState('')
  const [yoga04, setYoga04] = useState('')

  useOnClickOutside(formRef, () => setVisible(false))
  // функция отправки данных об изменении прогресса  и последующего забора изменных данных обратно в сторе
  function createUserProgress() {
    const db = getDatabase()
  
    set(ref(db, `/progress/3yRjRDMK7SRZVtrLlB18LbeWuSJ2/workouts/yoga01/`), {
      target: 20,
      user: Number(value),
    })
    const dbRef = ref(getDatabase())

    get(child(dbRef, `progress/3yRjRDMK7SRZVtrLlB18LbeWuSJ2/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()

          dispatch(
            getProgress({
              progress: data,
            })
          )
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    createUserProgress()
  }

  return (
    <S.FormWrapper ref={formRef} onSubmit={onSubmit}>
      <h2>Мой прогресс</h2>
      <S.ProgressForm>
      {exercisesPopup.map((item, i) => (
          <label>
            {item}
            <S.FormInput
              type="number"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Введите значение"
            />
          </label>
        ))}
       
        <Button buttonName="Отправить" type="submit" />
      </S.ProgressForm>
    </S.FormWrapper>
  )
}

export default WorkoutProgressForm

