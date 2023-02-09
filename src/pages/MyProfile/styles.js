import styled from 'styled-components'

export const Myprofile = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  margin-right: 140px;
`

export const MyprofileHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 75px;
`

export const MyprofileCards = styled.section`
  display: flex;
  flex-direction: row;
  gap: 40px;
`
export const MyprofileBlock = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 300px;
`
export const Button = styled.button`
  width: 278px;
  height: 52px;
  cursor: pointer;
  background: #580ea2;
  border-radius: 46px;
  margin-left: 4px;
  border: none;
  margin-top: 30px;
  box-sizing: border-box;
  color: #ffffff;
  &:hover {
    background: #3f007d;
  }
  $:active {
    background: #271a58;
  }
`
export const Buttons = styled.div`
    margin-top: 40px;
    margin-bottom 75px;
    gap: 14px;
`