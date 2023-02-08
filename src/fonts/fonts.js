import { createGlobalStyle } from "styled-components";

import StratosSkyengWoff from './._stratosskyengweb-thin.woff'
import StratosSkyengWoff2 from './._stratosskyengweb-thin.woff2'


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

        
        fontSize32{
            font-size: 32px;
            line-height: 40px;
        }


        fontSize24{
            font-size: 24px;
            line-height: 32px;
        }

        fontSize18{
            font-size: 18px;
            line-height: 24px; 
        }

        button{
            font-size: 16px;
            line-height: 24px;
        }

        button{
            font-size: 16px;
            line-height: 18px;
        }

        // // для карточек с тренировками

        fontSize36{
            font-weight: 800;
            font-size: 36px;
            line-height: 110%;
        }

        fontSize20{
            font-size: 20px;
            line-height: 115%;
            color: #FFFFFF;
        }
    }
`