import { createGlobalStyle } from 'styled-components'
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
`
