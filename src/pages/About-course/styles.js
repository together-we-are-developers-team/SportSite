import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 75px;
`

export const TitleWrapper = styled.div`
  background-image: url(${({ bg }) => bg});
  min-height: 310px;
  width: 100%;
  background-size: cover;
  border-radius: 30px;
  padding: 30px;
`
export const FitForYouWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: space-between;
  column-gap: 87px;
`

export const FitForYouItem = styled.div`
  display: -webkit-box;
`
export const FitForYouItemIndex = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  background-color: #c7e957;
  border-radius: 50%;
  margin-right: 24px;
`
export const FitForYouItemText = styled.p`
  max-width: 244px;
`

export const DirectionsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-auto-flow: column;
  list-style-position: inside;
  column-gap: 20px;
`

export const DirectionItem = styled.li`
  margin-left: 10px;
`

export const TrialWorkoutBlock = styled.div`
  padding: 46px 0 0 52px;
  background: #f9ebff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`

export const TrialWorkoutDescription = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 34px;
`
