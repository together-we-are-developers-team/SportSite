import { createGlobalStyle } from "styled-components";

import styled from "styled-components"

export const h1 = styled.h1`
    font-size: 64px;
    line-height: 72px;
`
export const h2 = styled.h2`
    font-size: 48px;
    line-height: 56px;
`

export const h3 = styled.h3`
    font-size: 40px;
    line-height: 48px;
`

export const fontSize32 = styled.fontSize32`
    font-size: 32px;
    line-height: 40px;
`


export const fontSize24 = styled.fontSize24`
    font-size: 24px;
    line-height: 32px;
`

export const fontSize18 = styled.fontSize18`
    font-size: 18px;
    line-height: 24px; 
`

export const fontSize16 = styled.fontSize16`
    font-size: 16px;
    line-height: 24px;
`

export const fntSize16 = styled.fntSize16`
    font-size: 16px;
    line-height: 18px;
`

// для карточек с тренировками

export const fontSize36 = styled.fontSize36`
    font-weight: 800;
    font-size: 36px;
    line-height: 110%;
`
// для облачка на главной
export const cloud = styled.cloud`
    font-size: 20px;
    line-height: 90%;
    color: #FF8071;
`

export const fontSize20 = styled.fontSize20`
    font-size: 20px;
    line-height: 115%;
    color: #FFFFFF;
`

createGlobalStyle`
@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('./._stratosskyengweb-regular.woff2') format('woff2'),
        url('./._stratosskyengweb-regular.woff') format('woff'),
    font-weight: 400;
    font-style: normal;
    color: #000000;
}
`