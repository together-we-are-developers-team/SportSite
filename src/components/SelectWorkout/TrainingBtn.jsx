import React, { useState } from 'react'
import * as S from './styles'

function TrainingBtn({ title, subTitle }) {
  const [active, setActive] = useState(false)

  return (
    <S.TrainingBtn active={active} onClick={() => setActive(!active)}>
      <S.BtnTitle>{title}</S.BtnTitle>
      {active && (
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
          <path d="M6 9.81034L11.775 15.5L27 0.5" stroke="#06B16E" />
        </svg>
      )}
      <S.BtnSubtitle>{subTitle}</S.BtnSubtitle>
    </S.TrainingBtn>
  )
}

export default TrainingBtn
