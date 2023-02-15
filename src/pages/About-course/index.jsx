/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDatabase, ref, child, get } from 'firebase/database'
import Button from '../../components/Button/Button'
import * as S from './styles'
import backgroundTitleBlock from './img/back.png'
import phoneImg from '../../assests/static/phone.png'
import { useAuth } from '../../hooks/use-auth'
import { useCourses } from '../../hooks/use-courses'
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
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error(error)
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
        <h1>{nameRu}</h1>
      </S.TitleWrapper>
      <section>
        <h2>Подойдет для вас, если:</h2>
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
        <h2>Направления:</h2>
        <S.DirectionsList>
          {directions?.map((data, index) => (
            <S.DirectionItem key={index + 1}>{data}</S.DirectionItem>
          ))}
        </S.DirectionsList>
      </section>

      {description}

      <S.TrialWorkoutBlock>
        <div>
          <S.TrialWorkoutDescription>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.TrialWorkoutDescription>
          <Button buttonName="Записаться на тренировку" />
        </div>
        <img src={phoneImg} alt="phone" />
      </S.TrialWorkoutBlock>
    </S.Main>
  )
}

export default AboutCourse
