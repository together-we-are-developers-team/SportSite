/* eslint-disable no-unused-expressions */

import React, { useState, useEffect, ReactRouterDOM } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import Exercises from '../../components/Exercises'
import WorkoutProgress from '../../components/Workout-progress'
// import playIconVideo from '../../assests/static/playIconVideo.png'

import WorkoutProgressForm from '../../components/Workout-progress/form/WorkoutProgressForm'
import { useCourses } from '../../hooks/use-courses'

function UserWorkout() {
  const params = useParams()

  const [visible, setVisible] = useState(false)
  const { isCourses, courses } = useCourses()

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll')
  }, [visible])

  console.log(params)

  const id = 'a01'
  const exercises = isCourses ? courses[4].workouts.yoga_d1.exercises : ''
  const exercisesPopup = courses[4].workouts.yoga_d1.exercises_popup
  const exercisesProgress = courses[4].workouts.yoga_d1.exercises_progress
  const title = courses[4].workouts.yoga_d1.course
  const { name } = courses[4].workouts.yoga_d1
  const { video } = courses[4].workouts.yoga_d1

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
          <WorkoutProgress exercisesProgress={exercisesProgress} id={id} />
        </S.ExercisesWrapper>
      </section>
      {visible && (
        <>
          <WorkoutProgressForm
            exercisesPopup={exercisesPopup}
            setVisible={setVisible}
          />
          <S.Overlay />
        </>
      )}
    </>
  )
}

export default UserWorkout
