import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  padding: 30px 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderButton = styled.button`
  padding: 5px 16px 7px;
  width: 77px;
  height: 36px;
  background: #140d40;
  border-radius: 46px;
  border: none;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  :hover {
    background: #2d1f79;
  }

  :active {
    background: #3b29a1;
  }

  ${(props) =>
    props.$IsUserLogged &&
    css`
      visibility: hidden;
    `}
`
