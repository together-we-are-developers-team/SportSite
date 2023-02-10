/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components'
import cardYoga from '../../images/card-yoga.png'
import cardStrench from '../../images/card-strench.png'
import cardStep from '../../images/card-step.png'
import cardDance from '../../images/card-dance.png'
import cardBody from '../../images/card-body.png'

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
