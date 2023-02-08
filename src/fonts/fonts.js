import { createGlobalStyle } from "styled-components";

import StratosSkyengWoff from './stratosskyengweb-thin.woff'
import StratosSkyengWoff2 from './stratosskyengweb-thin.woff2'


export default createGlobalStyle`
    @font-face {
        font-family: 'StratosSkyeng';
        src: local('StratosSkyeng'), local('StratosSkyeng'),
            url(${StratosSkyengWoff2}) format('woff2'),
            url(${StratosSkyengWoff}) format('woff'),
        font-weight: 400;
        font-style: normal;
        color: #000000;

        h1{
            font-size: 64px;
            line-height: 72px;
        }  

        h2{
        font-size: 48px;
        line-height: 56px;
        } 

        h3{
            font-size: 40px;
            line-height: 48px;
        }
    }
`