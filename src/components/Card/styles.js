import styled, { css } from 'styled-components'
import { greenButton } from '../Button/styles'


export const Card = styled.div`
  cursor: pointer;
  width: 360px;
  height: 480px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.5187px);
  border-radius: 30px;
  background-size: auto;
  padding: 30px;
  background-image: url(${({ cardImage }) => cardImage});
  background-position: center;
  box-shadow: 10px -10px 16px rgba(0, 0, 0, 0.1),
    -10px 10px 15.9988px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    scale: 1.01;
  }
`
export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 110%;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
`
export const ForwardCardGreenBtn = styled(greenButton)`
  position: absolute;
  left: 30px;
  bottom: 27px;

`