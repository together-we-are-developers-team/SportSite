/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDatabase, ref, child, get } from 'firebase/database'
import * as S from './styles'
import backgroundTitleBlock from './img/back.png'
import phoneImg from '../../assests/static/phone.png'
import { useCourses } from '../../hooks/use-courses'
import { useAuth } from '../../hooks/use-auth'
import { getCourses } from '../../store/slices/coursesSlices'

function AboutCourse() {
  const { id } = useParams()
  const { isAuth } = useAuth()
  const dispatch = useDispatch()
  const { isCourses, courses } = useCourses()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      navigate('/myprofile')
    }
    // если вдруг попали не с главной сюда загрузка данных курсов
    const dbRef = ref(getDatabase())
    if (!isCourses) {
      get(child(dbRef, `courses/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            dispatch(
              getCourses({
                courses: data,
              })
            )
          }
        })
    }

    /// переход сразу в мой профиль если авторизирован
    /// весь обьект курса: console.log( courses[id] )
    // id приходит из пути запроса(строка браузера)
    // описание: console.log(courses[id].description)
    // Подходит вам если, массив: console.log( courses[id].suitable)
    // Направления, массив console.log(courses[id].directions)
    // НАзвание курса на русском, строка console.log(courses[id].nameRu)
  }, [])
  const { description, suitable, directions, nameRu } = courses[id]

  return (
    <S.Main>
      <S.TitleWrapper bg={backgroundTitleBlock}>
        <S.Title>{nameRu}</S.Title>
      </S.TitleWrapper>
      <section>
        <S.FitTitle>Подойдет для вас, если:</S.FitTitle>
        <S.FitForYouWrapper>
          {suitable?.map((data, index) => (
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
          {directions?.map((data, index) => (
            <S.DirectionItem key={index + 1}>{data}</S.DirectionItem>
          ))}
        </S.DirectionsList>
      </section>

      <S.WorkoutDescription>{description}</S.WorkoutDescription>

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
