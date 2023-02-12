import React from 'react'
import * as S from './styles'

function UserAccount({ location }) {
  return (
    <S.SideBar>
      <S.SideBarName location={location}>Сергей</S.SideBarName>
    </S.SideBar>
  )
}

export default UserAccount
