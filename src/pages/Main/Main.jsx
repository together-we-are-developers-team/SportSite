import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDatabase, ref, child, get } from 'firebase/database'
import * as S from './styles'
import SaleStiker from '../../components/SaleStiker/SaleStiker'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { getCourses } from '../../store/slices/coursesSlices'
import { useCourses } from '../../hooks/use-courses'

function Main() {
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

  return (
    <div>
      <S.Main>
        <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
        <S.MainTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.MainTitle>
        <SaleStiker />
        <S.MainCards>
          {isCourses
            ? courses.map((item, i) => (
                <Link to={`/courses/${i}`}>
                  <Card
                    key={item.id}
                    titleCard={item.nameRu}
                    back={`card-${item.nameEng}`}
                  />
                </Link>
              ))
            : 'Курсов еще нет!'}
        </S.MainCards>
        <Button callback={UpWindow} isGreen buttonName="Наверх 🠕" />
      </S.Main>
    </div>
  )
}

export default Main
