import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 36px 55px 32px 44px;
`

export const ProgressList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 27px;
`

export const ProgressListItem = styled.li`
  display: flex;
  column-gap: 34px;
`

export const ProgressBar = styled.div`
  max-width: 278px;
  width: 100%;
  height: 36px;
  border-radius: 22px;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgc }) => bgc};
`

export const ProgressNumber = styled.span``
