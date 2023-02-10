import styled, { createGlobalStyle } from 'styled-components'
import StratosSkyeng from '../../assests/fonts/stratosskyengweb-regular.woff2'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        ::before,::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }


    @font-face {
        font-family: 'StratosSkyeng';
        src: url(${StratosSkyeng}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'StratosSkyeng';
        background: ${({ location }) =>
          location === '/' || location === '/signup' || location === '/signin'
            ? '#271A58'
            : '#FAFAFA'};
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 64px;
    }  

    h2 {
        font-size: 48px;
    } 

    h3 {
        font-size: 40px;
    }
`
// Сделать 1-2 глобальные p по тексту, если в текстах все p различаются или выставляешь просто fz, то в этом смысла нет, они не глобальные
export const StyledParagraph16px = styled.p`
  font-size: 16px;
`
export const StyledParagraph18px = styled.p`
  font-size: 18px;
`

export const StyledParagraph20px = styled.p`
  font-size: 20px;
`

export const StyledParagraph24px = styled.p`
  font-size: 24px;
`

export const StyledParagraph32px = styled.p`
  font-size: 32px;
`
