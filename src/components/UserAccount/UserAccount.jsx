import { React, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import{removeUser} from '../../store/slices/userSlices'
import * as S from './styles'
import Arrow from './arrow'

function UserAccount({ location, login }) {
  const [dropDownVisible, setDropdownVisible] = useState(false)

  const dropdownRef = useRef();

  const dispatch = useDispatch();


  const handleDropdown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setDropdownVisible(!dropDownVisible)
  }

  return (
    <S.SideBar>
      <S.SideBarAvatar />
      <S.SideBarName location={location}>{login}</S.SideBarName>
      <S.dropdownContainer>
          <Arrow dropdown={handleDropdown} location={location} />
        <S.dropdownBox ref={dropdownRef} active={dropDownVisible}>
          <S.dropdownBoxItem onClick={()=>dispatch(removeUser())} location={location}>Выйти</S.dropdownBoxItem>
        </S.dropdownBox>
      </S.dropdownContainer>
    </S.SideBar>
  )
}

export default UserAccount
