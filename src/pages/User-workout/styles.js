import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
`

export const SubTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
`

export const ExercisesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`
