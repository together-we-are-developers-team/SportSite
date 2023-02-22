import styled from 'styled-components'

export const PopAreaForTrainings = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 1;
`

export const PopupAreaMenu = styled.div`
  height: auto;
  max-width: 444px;
  padding: 36px 53px 58px 53px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
`
export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`

export const TraningWrap = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  max-height: 450px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
  }
`

export const TrainingBtn = styled.div`
  padding: 12px 27px 17px 27px;
  border: ${(props) =>
    props.active ? '1px solid #06b16e' : '1px solid #000000'};
  border-radius: 26px;
  color: ${(props) => (props.active ? '#06b16e' : '#000000')};
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
  text-align: center;
`

export const BtnSubtitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 17px;
`
