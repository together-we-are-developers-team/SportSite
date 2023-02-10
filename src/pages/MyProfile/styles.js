/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components'
import cardYoga from '../../images/card-yoga.png'
import cardStrench from '../../images/card-strench.png'
import cardStep from '../../images/card-step.png'
import cardDance from '../../images/card-dance.png'
import cardBody from '../../images/card-body.png'

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
`
export const MyprofileBlock = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 286px;
  margin-bottom: 75px;
`

export const MyprofileCards = styled.section`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 60px;
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
  margin-bottom: 75px;
  gap: 14px;
`

export const greenButton = styled.button`
  margin-top: 34px;
  cursor: pointer;
  width: 147px;
  height: 48px;
  background: #c7e957;
  border-radius: 46px;
  text-align: center;
  letter-spacing: -0.1px;
  align-self: center;
  border: none;
  transition: 0.3s;
  position: absolute;
  left: 30px;
  bottom: 27px;
  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`

export const cards = styled.div`
  display: flex;
`

export const Card = styled.div`
  cursor: pointer;
  width: 360px;
  height: 480px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.5187px);
  border-radius: 30px;
  background-size: auto;
  background-image: url(${(props) =>
    props.$IsBack === 'card-yoga'
      ? cardYoga
      : props.$IsBack === 'card-strench'
      ? cardStrench
      : props.$IsBack === 'card-step'
      ? cardStep
      : props.$IsBack === 'card-dance'
      ? cardDance
      : cardBody});
  background-position: center;
  box-shadow: 10px -10px 16px rgba(0, 0, 0, 0.1),
    -10px 10px 15.9988px rgba(0, 0, 0, 0.1);
  &:hover {
    scale: 1.01;
  }
`
export const CardTitle = styled.h3`
  width: 290px;
  height: 120px;
  margin: 30px 0 0 30px;
  line-height: 110%;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
`
