import React from 'react'
import { useState, useEffect } from 'react'
import * as S from './styles'

const Button = ({
  buttonName,
  isPurple,
  isLarge,
  isHeaderButton,
  callback,
}) => {
  const [purpleColor, setPurpleColor] = useState(false)
  const [large, setLarge] = useState(true)
  const [headerButton, setHeaderButton] = useState(false)

  useEffect(() => {
    if (isPurple) {
      setPurpleColor(true)
    } else {
      setPurpleColor(false)
    }
  }, [isPurple])

  useEffect(() => {
    if (isLarge) {
      setLarge(true)
    } else {
      setLarge(false)
    }
  }, [isLarge])

  useEffect(() => {
    if (isHeaderButton) {
      setHeaderButton(true)
    } else {
      setHeaderButton(false)
    }
  }, [isHeaderButton])

  if (headerButton) {
    return <S.HeaderButton onClick={callback}>{buttonName}</S.HeaderButton>
  }

  if (!large) {
    return <S.smallButton onClick={callback}>{buttonName}</S.smallButton>
  }

  if (purpleColor) {
    return (
      <S.ButtonLargePurple onClick={callback}>{buttonName}</S.ButtonLargePurple>
    )
  } else {
    return (
      <S.ButtonLargeTransparent onClick={callback}>
        {buttonName}
      </S.ButtonLargeTransparent>
    )
  }
}
export default Button
