import styled, { css } from 'styled-components'

export const ButtonLargePurple = styled.button`
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
  transition: 0.3s;
  &:hover {
    background: #3f007d;
  }
  &:active {
    background: #271a58;
  }
`
export const ButtonLargeTransparent = styled(ButtonLargePurple)`
  color: black;
  margin-top: 20px;
  background: transparent;
  border: 1px solid #d0cece;
  transition: 0.3s;
  &:hover {
    background: #f4f5f6;
  }
  &:active {
    background: #d9d9d9;
  }
`
export const smallButton = styled.button`
  margin-top: 34px;
  cursor: pointer;
  width: 147px;
  height: 48px;
  background: #c7e957;
  border-radius: 46px;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.1px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  align-self: center;
  border: none;
  transition: 0.3s;
  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`

export const HeaderButton = styled.button`
  padding: 5px 16px 7px;
  width: 77px;
  height: 36px;
  background: #140d40;
  border-radius: 46px;
  border: none;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #2d1f79;
  }
  &:active {
    background: #3b29a1;
  }
  ${(props) =>
    props.$IsUserLogged &&
    css`
      visibility: hidden;
    `}
`
