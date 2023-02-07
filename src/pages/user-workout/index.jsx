import React from 'react'
import * as S from './styles'
import Exercises from '../../components/exercises'
import WorkoutProgress from '../../components/workout-progress'
import ReactPlayer from 'react-player'
import playIconVideo from '../../assests/static/playIconVideo.png'

const UserWorkout = () => {
  return (
    <section>
      {/* Container. Must be added to global styles */}
      <div className="container">
        <h1>Йога</h1>
        <h2>Красота и здоровье / Йога на каждый день / 2 день</h2>
        <ReactPlayer
          url="https://youtu.be/v-xTLFDhoD0"
          width="100%"
          height="100%"
          playIcon={playIconVideo}
        />
        <S.ExercisesWrapper>
          <Exercises />
          <WorkoutProgress />
        </S.ExercisesWrapper>
      </div>
    </section>
  )
}

export default UserWorkout
