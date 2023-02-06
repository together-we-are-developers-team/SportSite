import { createGlobalStyle } from "styled-components";

createGlobalStyle`
@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('./._stratosskyengweb-regular.woff2') format('woff2'),
        url('./._stratosskyengweb-regular.woff') format('woff'),
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

    p{
        font-size: 24px;
        line-height: 32px;
    }

    // и еще есть p поменьше 
    // p{
    //     font-size: 18px;
    //     line-height: 24px; 
    // }
}
`