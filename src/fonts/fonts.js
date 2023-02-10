import { createGlobalStyle } from 'styled-components'

import StratosSkyengWoff from '../fonts/Stratos-Regular.woff'
import StratosSkyengWoff2 from '../fonts/Stratos-Regular.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {  
        src: local('StratosSkyeng'), local('StratosSkyeng'),
            url(${StratosSkyengWoff2}) format('woff2'),
            url(${StratosSkyengWoff}) format('woff'),
        font-weight: 400;
        font-family: 'StratosSkyeng';

        h1 {
            font-size: 64px;
        }  

        h2 {
            font-size: 48px;
        } 

        h3 {
            font-size: 40px;

        }
        * {
        font-family: 'StratosSkyeng';
        };
        body{
            font-family: 'StratosSkyeng';
        }
    }
`
export default GlobalStyles