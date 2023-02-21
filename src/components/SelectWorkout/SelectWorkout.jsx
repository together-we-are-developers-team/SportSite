import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import TrainingBtn from './TrainingBtn'
import { useCourses } from '../../hooks/use-courses'

function SelectWorkout({ active, setActive, course }) {
  const { courses } = useCourses()
  const onSubmit = (event) => {
    event.preventDefault()
  }

  if (!active) {
    return null
  }
  const currentCourseDays = Object.values(
    courses.filter((item) => item.id === course).pop().workouts
  )

  return (
    <S.PopAreaForTrainings onClick={() => setActive(false)}>
      <S.PopupAreaMenu onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.Title>Выберите тренировку</S.Title>

        {currentCourseDays.map((training) => (
          <Link key={training.id} to={`/myprofile/courses/${training.id}`}>
            <TrainingBtn
              key={training.id}
              title={training.name}

              subTitle={training.subTitle}
            />
          </Link>
        ))}
      </S.PopupAreaMenu>
    </S.PopAreaForTrainings>
  )
}

export default SelectWorkout
