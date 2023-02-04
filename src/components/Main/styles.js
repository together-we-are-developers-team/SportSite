import styled from 'styled-components'

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 60px;
`
export const MainTitle = styled.h1`
  margin-top: 17px;
  margin-bottom: 52px;
  width: 830px;
  height: 110px;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 91.5%;
  letter-spacing: -1.16878px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #f4f4ff;
`
export const MainSubTitle = styled.h3`
  width: 363px;
  height: 23px;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.05px;
  color: #ffffff;
  opacity: 0.5;
`
export const MainCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 44px 37px;
`
export const MainUpButton = styled.button`
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
  &:hover {
    background: #daf289;
  }
  $:active {
    background: #ebffab;
  }
`
