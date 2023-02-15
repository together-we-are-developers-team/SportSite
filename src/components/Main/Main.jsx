import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, child, get } from 'firebase/database'
import SaleStiker from '../SaleStiker/SaleStiker'
import Card from '../Card/Card'
import * as S from './styles'
import Button from '../Button/Button'
import { getCourses } from '../../store/slices/coursesSlices'
import { useCourses } from '../../hooks/use-courses'

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isCourses, courses } = useCourses()
  /// /////////////////////////////////////////

  /* для заполнения карточек можно использовать массив курсов courses,путем его обхода и рендера карточек по данным  */
  // названия курсов можно взять так, пример console.log(courses[0].nameRu)
  // для подбора нужной картинки на карточке курса можно использовать англ имя,если правильным образом назвать картинки в папке images, пример  console.log(courses[0].nameEng)
  /// ////////////////////////////////////////////
  /// функция первоночального заполнения данных в сторе по курсам при открытии main
  useEffect(() => {
    const dbRef = ref(getDatabase())

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
  }, [])
  const UpWindow = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  // eslint-disable-next-line no-underscore-dangle

  return (
    <div>
      <S.Main>
        <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
        <S.MainTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.MainTitle>
        {/* <SaleStiker /> Если просто 1 фото, которое нигде не переиспользуется, лучше не делать отдельный компонент */}
        <SaleStiker />
        {/*   <S.MainCards> Лучше сделать отдльный компонент и сделать моковые данные, и перебирать массивом, тогда в стилях карточки(компонент <Card>) не надо будет ставить if else так много для картинок(backgroundImage) */}
        <S.MainCards>
          {isCourses && (
            <>
              {courses.map((item, i) => (
                <Card
                  key={item.id}
                  titleCard={item.nameRu}
                  back={`card-${item.nameEng}`}
                  onClick={() => navigate(`/courses/${i}`)}
                />
              ))}
            </>
          )}
          {!isCourses && (
            <>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </>
          )}
        </S.MainCards>
        <Button callback={UpWindow} isGreen buttonName="">
          Наверх 🠕
        </Button>
      </S.Main>
    </div>
  )
}

export default Main
