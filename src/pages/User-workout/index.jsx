import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Exercises from '../../components/Exercises'
import WorkoutProgress from '../../components/Workout-progress'
import ReactPlayer from 'react-player'
import playIconVideo from '../../assests/static/playIconVideo.png'
import WorkoutProgressForm from '../../components/Workout-progress/form/WorkoutProgressForm'

const UserWorkout = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll')
  }, [visible])

  return (
    <>
      <section>
        <h1>Йога</h1>
        <h2>Красота и здоровье / Йога на каждый день / 2 день</h2>
        <ReactPlayer
          url="https://youtu.be/v-xTLFDhoD0"
          width="100%"
          height="640px"
          // light={true}
          controls={true}
          // playIcon={playIconVideo}
          style={{ 'margin-bottom': '75px' }}
        />
        <S.ExercisesWrapper>
          <Exercises visible={visible} setVisible={setVisible} />
          <WorkoutProgress />
        </S.ExercisesWrapper>
      </section>
      {visible && (
        <>
          <WorkoutProgressForm setVisible={setVisible} />
          <S.Overlay />
        </>
      )}
    </>
  )
}

export default UserWorkout
