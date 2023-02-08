import React from 'react'
import * as S from './styles'
import TrainingBtn from './TrainingBtn'


const SelectWorkout = () => {

  // const [active, setActive] = useState(false);



  return (
    <S.PopupAreaMenu>
      <h1>Выберите тренировку</h1>
      <TrainingBtn/>

    </S.PopupAreaMenu>
  )
}

export default SelectWorkout
