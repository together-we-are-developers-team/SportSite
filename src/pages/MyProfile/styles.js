import styled from 'styled-components'
import { greenButton } from '../../components/Button/styles'

export const MyprofileBlock = styled.section`
  display: flex;
  flex-direction: column;
`

export const MyprofileHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;
`

export const MyprofileUserInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 286px;
  margin-bottom: 75px;
`

export const Button = styled.button`
  width: 278px;
  height: 52px;
  cursor: pointer;
  background: #580ea2;
  border-radius: 46px;
  margin-left: 4px;
  border: none;
  margin-bottom: 14px;
  box-sizing: border-box;
  color: #ffffff;
  &:hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`

export const MyprofileUserChangeButtons = styled.div`
  gap: 14px;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 60px;
  margin-top: 61px;
`

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 20px;
`

export const ForwardCardGreenBtn = styled(greenButton)`
  position: absolute;
  left: 30px;
  bottom: 27px;
`

export const MyProfileCardsBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const MyprofileCards = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
`