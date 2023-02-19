import React from 'react'
import * as S from './styles'
import TrainingBtn from './TrainingBtn'

function SelectWorkout({ active, setActive }) {
  const onSubmit = (event) => {
    event.preventDefault()
  }
  if (!active) {
    return null
  }

  const trainings = [
    {
      id: 1,
      title: 'Утренняя практика',
      subTitle: 'Йога на каждый день / 1 день',
    },
    {
      id: 2,
      title: 'Красота и здоровье',
      subTitle: 'Йога на каждый день / 2 день',
    },
    {
      id: 3,
      title: 'Асаны стоя',
      subTitle: 'Йога на каждый день / 3 день',
    },
    {
      id: 4,
      title: 'Растягиваем мышцы бедра',
      subTitle: 'Йога на каждый день / 4 день',
    },
    {
      id: 5,
      title: 'Гибкость спины',
      subTitle: 'Йога на каждый день / 5 день',
    },
  ]

  return (
    <S.PopAreaForTrainings onClick={() => setActive(false)}>
      <S.PopupAreaMenu onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.Title>Выберите тренировку</S.Title>

        {trainings.map((training) => (
          <TrainingBtn
            key={training.id}
            title={training.title}
            subTitle={training.subTitle}
          />
        ))}
      </S.PopupAreaMenu>
    </S.PopAreaForTrainings>
  )
}

export default SelectWorkout
