import styled from 'styled-components'

export const SideBar = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  padding-bottom: 14px;
  align-items: center;
`
export const SideBarName = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ location }) => (location === '/' ? 'white' : 'black')};
`
export const SideBarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #d9d9d9;
  border-radius: 50%;
`
export const dropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
export const arrowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  hight: 20px;
`

export const dropdownBox = styled.div`
  top: 30px;
  position: absolute;
  border: none;
  border-radius: 3px;
  transition: 0.3s;
  scale: ${({ active }) => (active ? '1' : '0')};
`
export const dropdownBoxItem = styled.p`
  padding: 0 5px;
  color: ${({ location }) => (location === '/' ? 'white' : 'black')};
`
