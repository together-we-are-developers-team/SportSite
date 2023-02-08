import styled from 'styled-components'
import successimg from '../../images/successtraining.svg'

export const PopupAreaMenu = styled.div`
  height: 444px;
  width: 626px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
`

export const TrainingBtnSuccess = styled.button`
  width: 278px;
  height: 76px;
  left: 0px;
  top: 0px;
  content: fit;
  border: 1px solid #06b16e;
  border-radius: 26px;
  color: #06b16e;
`
export const BtnImg = styled.div`

  width: 27px;
  height: 25px;
  margin-top: 12px;
  background-image: url(${successimg});
`

export const TrainingBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 278px;
  left: 83px;
  top: 0px;
  border: ${props => props.active ? '1px solid #06b16e' : '1px solid #000000'};
  border-radius: 26px;
  color: ${props => props.active ? '#06b16e' : '#000000'};
  gap: 12px;
  position: relative;
  & svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`

export const BtnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-top: 11px;
  margin-bottom: 6px;
`

export const BtnSubtitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-bottom: 17px;
`
