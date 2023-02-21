/* eslint-disable no-unused-expressions */

import React, { useState, useEffect, ReactRouterDOM } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import Exercises from '../../components/Exercises'
import WorkoutProgress from '../../components/Workout-progress'
import WorkoutProgressForm from '../../components/Workout-progress/form/WorkoutProgressForm'
import { useCourses } from '../../hooks/use-courses'

function UserWorkout() {
  const params = useParams()

  const [visible, setVisible] = useState(false)
  const { courses } = useCourses()

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll')
  }, [visible])

  const { id } = params
  const { workouts, name, video } = courses[4].workouts[id]
  const exercises = workouts.map((item) => item.exercises)
  const exercisesPopup = workouts.map((item) => item.exercises_popup)
  const exercisesProgress = workouts.map((item) => item.exercises_progress)
  const title = courses[4].workouts[id].course

  return (
    <>
      <section>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <ReactPlayer
          url={video}
          width="100%"
          height="640px"
          // light={true}
          controls
          // playIcon={playIconVideo}
          style={{ 'margin-bottom': '75px' }}
        />
        <S.ExercisesWrapper>
          <Exercises
            visible={visible}
            setVisible={setVisible}
            exercises={exercises}
          />
          <WorkoutProgress
            exercisesProgress={exercisesProgress}
            id={id}
            workouts={workouts}
          />
        </S.ExercisesWrapper>
      </section>
      {visible && (
        <>
          <WorkoutProgressForm
            exercisesPopup={exercisesPopup}
            setVisible={setVisible}
            workouts={workouts}
          />
          <S.Overlay />
        </>
      )}
    </>
  )
}

export default UserWorkout
