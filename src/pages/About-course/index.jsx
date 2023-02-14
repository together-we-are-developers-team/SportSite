/* eslint-disable react/no-array-index-key */
import React from 'react'
import * as S from './styles'
import backgroundTitleBlock from './img/back.png'
import phoneImg from '../../assests/static/phone.png'

function AboutCourse() {
  const fitForYouDataTest = [
    'Давно хотели попробовать йогу, но не решались начать.',
    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
    'Ищете активность, полезную для тела и души.',
  ]

  const directionsDataTest = [
    'Йога для новичков',
    'Классическая йога',
    'Йогатерапия',
    'Кундалини-йога',
    'Хатха-йога',
    'Аштанга-йога',
  ]

  return (
    <S.Main>
      <S.TitleWrapper bg={backgroundTitleBlock}>
        <S.Title>Йога</S.Title>
      </S.TitleWrapper>
      <section>
        <S.FitTitle>Подойдет для вас, если:</S.FitTitle>
        <S.FitForYouWrapper>
          {fitForYouDataTest?.map((data, index) => (
            <S.FitForYouItem key={index + 1}>
              <S.FitForYouItemIndex>{index + 1}</S.FitForYouItemIndex>
              <S.FitForYouItemText>{data}</S.FitForYouItemText>
            </S.FitForYouItem>
          ))}
        </S.FitForYouWrapper>
      </section>
      <section>
        <S.DirectionTitle>Направления:</S.DirectionTitle>
        <S.DirectionsList>
          {directionsDataTest?.map((data, index) => (
            <S.DirectionItem key={index + 1}>{data}</S.DirectionItem>
          ))}
        </S.DirectionsList>
      </section>

      <S.WorkoutDescription>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </S.WorkoutDescription>

      <S.TrialWorkoutBlock>
        <div>
          <S.TrialWorkoutDescription>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.TrialWorkoutDescription>
          <S.TrialButton>Записаться на тренировку</S.TrialButton>
        </div>
        <S.TrialPhoneImg src={phoneImg} alt="phone" />
      </S.TrialWorkoutBlock>
    </S.Main>
  )
}

export default AboutCourse
