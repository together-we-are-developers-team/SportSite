import styled, { css } from 'styled-components'
import cardYoga from '../../images/card-yoga.png'
import cardStrench from '../../images/card-strench.png'
import cardStep from '../../images/card-step.png'
import cardDance from '../../images/card-dance.png'
import cardBody from '../../images/card-body.png'

export const Card = styled.div`
  cursor: pointer;
  width: 360px;
  height: 480px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.5187px);
  border-radius: 30px;
  background-size: auto;
  background-image: url(${(props) =>
    props.$IsBack === 'card-yoga'
      ? cardYoga
      : props.$IsBack === 'card-strench'
      ? cardStrench
      : props.$IsBack === 'card-step'
      ? cardStep
      : props.$IsBack === 'card-dance'
      ? cardDance
      : cardBody});
  background-position: center;
  box-shadow: 10px -10px 16px rgba(0, 0, 0, 0.1),
    -10px 10px 15.9988px rgba(0, 0, 0, 0.1);
  &:hover {
    scale: 1.01;
  }
`
export const CardTitle = styled.h3`
  width: 290px;
  height: 120px;
  margin: 30px 0 0 30px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 110%;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
`
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #4e4e4e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: inherit;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-align: left;
  text-decoration: none;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackAlbum = styled.div`
  width: 245px;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTime = styled.div``
export const TrackTitleText = styled.div`
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTimeSvg = styled.button`
  cursor: pointer;
  border: none;
  width: 14px;
  height: 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
