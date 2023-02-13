import React from 'react'
import * as S from './styles'

function Button({
  children,
  isTransparent,
  isHeaderButton,
  isGreen,
  callback,
  isVisible,
}) {
  if (isGreen) {
    return <S.greenButton onClick={callback}>{children}</S.greenButton>
  }

  if (isHeaderButton) {
    return (
      <S.headerButton visible={isVisible} onClick={callback}>
        {children}
      </S.headerButton>
    )
  }

  return (
    <S.mainButton onClick={callback} transparent={isTransparent}>
      {children}
    </S.mainButton>
  )
}
export default Button
